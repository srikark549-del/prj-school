import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});

//mongodb+srv://<db_username>:K69DxtkyG8Qtnhka@cluster0.fdgumlb.mongodb.net/?appName=Cluster0