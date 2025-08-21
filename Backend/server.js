import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import connectDB from './config/db.js'
import cors from "cors"

const app = express();
app.use(express.json()); // body parser


app.use(cors()) // cors is used when local hosts are different 3000 and 5500
// MongoDB connection


// Test route
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// Mount user routes
app.use("/api/users", userRoutes);

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
});
