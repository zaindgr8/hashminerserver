const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
const connectDb = require("./config/connection");
connectDb();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Zain");
});

app.use("/api", require("./routes/user"));

app.listen(5001, () => {
  console.log("Server Started");
});
