import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Contact from "./models/Contact.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "EV-olution Backend is Running 🚗⚡",
  });
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
      contact: newContact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});