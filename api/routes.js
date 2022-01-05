import express from "express";
const router = express.Router();

import movieRoutes from "./movie/movie.routes.js";

router.get("/", function (req, res, next) {
  return res.json({
    message: "Welcome to netflix!",
  });
});

router.use("/movies", movieRoutes);

export default router;
