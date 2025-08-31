import express from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
