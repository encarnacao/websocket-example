import pgPool from "../database/pg.js";

export async function getUser(username) {
  const client = await pgPool.connect();
  try {
    const user = await client.query("SELECT * FROM users WHERE name = $1", [
      username,
    ]);
    if (!user.rows.length) {
      const newUser = await client.query(
        "INSERT INTO users (name) VALUES ($1) RETURNING *",
        [username],
      );
      await client.query(
        "INSERT INTO credits (user_id, amount) VALUES ($1, $2)",
        [newUser.rows[0].id, 1000],
      );
      return newUser.rows[0];
    }
    return user.rows[0];
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    return false;
  } finally {
    client.release();
  }
}
