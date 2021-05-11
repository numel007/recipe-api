const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(mongoUri, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
  console.log(err);
  throw new Error(`Could not connect to ${mongoUri}`);
});

module.exports = mongoose.connection;
