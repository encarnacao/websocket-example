import pgPool from "../database/pg.js";
import crypto from "crypto";

export async function getUserCredits(userId) {
  const client = await pgPool.connect();
  try {
    const result = await client.query(
      `
      SELECT
        amount AS credits
      FROM credits
      WHERE user_id = $1;
      `,
      [userId],
    );
    if (result.rows.length) {
      return result.rows[0].credits;
    } else {
      console.warn("Nenhum crédito encontrado para o userId:", userId);
      return 0;
    }
  } catch (err) {
    console.error("Erro ao buscar créditos do usuário:", err);
    return false;
  } finally {
    client.release();
  }
}

export async function addCreditsTxn(userId, amount) {
  const client = await pgPool.connect();
  const txnId = crypto.randomUUID();
  try {
    await client.query(
      `
      INSERT INTO transaction_history (user_id, type, amount, txn_id)
      VALUES ($1, $2, $3, $4);
    `,
      [userId, "credit", amount, txnId],
    );
    return txnId;
  } catch (err) {
    console.error("Erro ao adicionar transação de créditos:", err);
    return false;
  } finally {
    client.release();
  }
}

export async function updateCredits(txnId, approved) {
  const client = await pgPool.connect();
  try {
    await client.query("BEGIN;");
    if (approved) {
      const { rows: txnRows } = await client.query(
        `UPDATE transaction_history
         SET status = 'approved'
         WHERE txn_id = $1
         RETURNING user_id, amount;`,
        [txnId],
      );
      await client.query(
        `
        UPDATE credits
        SET amount = amount + $1
        WHERE user_id = $2;
        `,
        [txnRows[0].amount, txnRows[0].user_id],
      );
      const { rows } = await client.query(
        "SELECT amount FROM credits WHERE user_id = $1;",
        [txnRows[0].user_id],
      );
      return { newBalance: rows[0].amount, userId: txnRows[0].user_id };
    } else {
      await client.query(
        `UPDATE transaction_history
         SET status = 'rejected'
         WHERE txn_id = $1;`,
        [txnId],
      );
    }
    return {};
  } catch (err) {
    console.error("Erro ao atualizar créditos do usuário:", err);
    await client.query("ROLLBACK;");
    return {};
  } finally {
    await client.query("COMMIT;");
    client.release();
  }
}

export async function getPendingTransactions() {
  const client = await pgPool.connect();
  try {
    const result = await client.query(
      `
      SELECT
        th.txn_id,
        u.name,
        th.amount
      FROM transaction_history th
      JOIN users u ON th.user_id = u.id
      WHERE th.status = 'pending';
      `,
    );
    return result.rows;
  } catch (err) {
    console.error("Erro ao buscar transações pendentes:", err);
    return false;
  } finally {
    client.release();
  }
}

export async function removeCreditsTxn(userId, amount) {
  const client = await pgPool.connect();
  const txnId = crypto.randomUUID();
  try {
    await client.query("BEGIN;");
    await client.query(
      `
      INSERT INTO transaction_history (user_id, type, amount, txn_id, status)
      VALUES ($1, $2, $3, $4, 'approved');
    `,
      [userId, "debit", -amount, txnId],
    );
    const { rows } = await client.query(
      `UPDATE credits SET amount = amount - $1 WHERE user_id = $2 returning amount;`,
      [amount, userId],
    );
    return { txnId, newBalance: rows[0].amount };
  } catch (err) {
    console.error("Erro ao remover créditos do usuário:", err);
    await client.query("ROLLBACK;");
    return false;
  } finally {
    await client.query("COMMIT;");
    client.release();
  }
}
