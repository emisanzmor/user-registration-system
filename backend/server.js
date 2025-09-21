// Import tools
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware setup
app.use(cors());
app.use(express.json());

// Import routes
const healthRoutes = require("./routes/health");
app.use("/health", healthRoutes);

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Datos recibidos: ", name, email, password);

  res.json({ message: "Usuario registrado correctamente" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
