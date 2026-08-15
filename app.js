const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for all requests
app.use(cors());

// Parse JSON request body
app.use(express.json());

// All API routes start from /api
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});