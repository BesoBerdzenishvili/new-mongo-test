require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("EXPERIMENT! port1: " + { PORT });
});

mongoose.connect(process.env.MONGO_URI).catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
