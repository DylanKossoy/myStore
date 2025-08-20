import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import connectDB from './config/db.js'

const app = express();
app.use(express.json()); // body parser

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
