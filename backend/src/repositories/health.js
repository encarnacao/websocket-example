import pgPool from "../database/pg.js";

export async function getDatabaseStatsActivity() {
  try {
    const client = await pgPool.connect();
    const result = await client.query("SELECT * FROM pg_stat_activity");
    client.release();
    return result.rows[0];
  } catch (err) {
    console.error("Erro ao verificar conexão com o banco de dados:", err);
    return false;
  }
}
