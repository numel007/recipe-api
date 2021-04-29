const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "recipe-api";
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(mongoUri, { useNewUrlParser: true });

mongoose.connection.on("error", () => {
  throw new Error(`Could not connect to ${mongoUri}`);
});

module.exports = mongoose.connection;
