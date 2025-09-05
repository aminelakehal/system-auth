import db from "../db.js";

class User {
  static async findByEmail(email) {
    try {
      const [rows] = await db.execute(
        "SELECT * FROM users WHERE email = ? LIMIT 1",
        [email]
      );
      return rows[0] || null;
    } catch (error) {
      console.error("findByEmail error:", error);
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      const [rows] = await db.execute(
        "SELECT * FROM users WHERE username = ? LIMIT 1",
        [username]
      );
      return rows[0] || null;
    } catch (error) {
      console.error("findByUsername error:", error);
      throw error;
    }
  }

  static async create(username, email, hashedPassword) {
    try {
      const [result] = await db.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );
      return result.insertId;       
    } catch (error) {
      console.error("create user error:", error);
      throw error;
    }
  }
}

export default User;
