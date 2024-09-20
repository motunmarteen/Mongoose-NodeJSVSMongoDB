require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");

// Create an express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import and use person routes
app.use("/api/person", personRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
