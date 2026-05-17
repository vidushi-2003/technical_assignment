const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/jobs", jobRoutes);
app.use("/api/auth", authRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});