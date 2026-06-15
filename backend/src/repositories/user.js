import pgPool from "../database/pg.js";

export async function getUser(username) {
  const client = await pgPool.connect();
  try {
    const user = await client.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (!user.rows.length) {
      const newUser = await client.query(
        "INSERT INTO users (username) VALUES ($1) RETURNING *",
        [username],
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
