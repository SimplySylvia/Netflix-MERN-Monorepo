import express from "express";

const app = express();

app.get("/api/v1", function (req, res, next) {
  return res.json({
    message: "Welcome to netflix!",
  });
});

app.listen(4000, function () {
  console.log("API is alive!");
});
