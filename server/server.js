import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import tasksRoutes from "./routes/tasks.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", tasksRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("🚀 Backend lancé sur http://localhost:5000")
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});
