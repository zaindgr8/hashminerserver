const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://zangbang360:wegrowtogether-yo1@cluster0.mwkciiy.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDb;
