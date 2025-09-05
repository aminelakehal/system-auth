import express from "express";
import cors from "cors";    
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
