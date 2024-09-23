import express from "express"; // Importing express
import dotenv from "dotenv"; // Importing dotenv for environment variables
import { connectDB } from "./config/db.js"; // Importing database connection function
import Product from "./models/product.module.js"; // Importing Product model

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application

app.use(express.json()); // Middleware to parse JSON request bodies

// Start the server and connect to the database
app.listen(5000, () => {
  connectDB(); // Connect to the database before starting the server
  console.log("Server started at http://localhost:5000"); // Log server start message
});
