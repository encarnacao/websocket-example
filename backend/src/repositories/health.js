import pgPool from "../database/pg.js";

export async function getDatabaseStatsActivity() {
  try {
    const client = await pgPool.connect();
    const result = await client.query(
      "SELECT count(*) FROM pg_stat_activity WHERE datname = $1",
      [process.env.POSTGRES_DB],
    );
    client.release();
    return result.rows[0];
  } catch (err) {
    console.error("Erro ao verificar conexão com o banco de dados:", err);
    return false;
  }
}
