import bcrypt from "bcryptjs";
import User from "../models/user.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create(username, email, hashedPassword);

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid username or password");
    }

    res.status(200).send("Login successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
