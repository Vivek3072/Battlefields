const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Settings = require("./models/Settings");
const Map = require("./models/Map");
const connectDb = require("./ConnectDb");

const app = express();
const port = 3000;

// Connect to MongoDB
connectDb();

const corsOptions = {
  origin: [
    process.env.UI_ROOT_URI,
    "http://localhost:3000",
    "http://localhost:5173",
    "https://battlefields.onrender.com",
    "https://battlefields.onrender.com/",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());

// Get settings
app.get("/settings", async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update settings
app.put("/settings", async (req, res) => {
  try {
    const updatedSettings = await Settings.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updatedSettings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/maps", async (req, res) => {
  try {
    const maps = await Map.find();
    res.json(maps);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
