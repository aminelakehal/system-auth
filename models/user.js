// model
import db from "../db.js";

class User {
  static async findByEmail(email) {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return rows[0];
  }

  static async findByUsername(username) {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    return rows[0];
  }

  static async create(username, email, hashedPassword) {
    await db.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );
  }
}

export default User;
