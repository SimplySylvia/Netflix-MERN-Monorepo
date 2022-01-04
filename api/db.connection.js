import mongoose from "mongoose";
import config from "@netflix/config";

export default mongoose.connect(config.MONGO_URI);

mongoose.connection.on("connected", function () {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`
  ); // blue
});

// on error
mongoose.connection.on("error", function (error) {
  console.log("\x1b[31m%s\x1b[0m", "MongoDB connection error 😥", error); // red
});

// on disconnected
mongoose.connection.on("disconnected", function () {
  console.log("\x1b[33m%s\x1b[0m", "MongoDB disconnected  ⚡️ 🔌 ⚡️"); // yellow
});
