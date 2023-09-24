const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./config/db");

const app = express();

const PORT = 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "public" directory in your frontend
app.use(express.static(path.join(__dirname, "..", "socialmedia", "public")));

// Define a default route to serve the "index.html" file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "social", "public", "index.html"));
});

// REST API routes setup (e.g., user registration, login, posts CRUD)
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
