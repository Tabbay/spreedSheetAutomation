require("express-async-errors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const gzip = require("compression");

// Custom error handling
const { ErrorHandler, NotFoundHandler } = require("./global/errors");

// Import controllers
const { addEntry } = require("./controller/addEntry");

// Read environment data
dotenv.config();

// Initialize app
const app = express();

// Apply middleware
app.use(helmet());
app.use(cors());
app.use(gzip());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply routing
app.get("/", (req, res) => {
  const { body, params, query } = req;
  res.status(200).json({ message: "Healthy", body, params, query });
});
app.post("/", addEntry);

// Apply error handling
app.use(ErrorHandler);
app.use(NotFoundHandler);

// Listen for requests
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on 127.0.0.1:${port}`));
