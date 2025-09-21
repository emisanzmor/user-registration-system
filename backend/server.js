// Import tools
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

// Create app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware setup
app.use(cors());
app.use(express.json());

// Function to connect to MongoDB using Mongoose
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas", err);
    process.exit(1);
  }
}

// Execute MongoDB connection
connectDB();

// Import health check routes
const healthRoutes = require("./routes/health");
app.use("/health", healthRoutes);

// POST endpoint for user registration
app.post("/register", async (req, res) => {
  try {
    // Destructuring, extract from request body
    const { name, email, password } = req.body;

    // Create a new User document
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Send JSON confirmation response to frontend
    res.json({ message: "User registered" });
  } catch (err) {
    console.error("Error en el registro", err);
    // Send JSON error response to frontend
    res.status(500).json({ error: "Couldn't register user" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
