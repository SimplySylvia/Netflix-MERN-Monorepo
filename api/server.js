/* === External Modules === */
import express from "express";
import cors from "cors";

/* === Internal Modules === */
import "./db.connection.js"; // brings in db conection
import config from "@netflix/config"; // brings in all external configuration
import movieRoutes from "./movie/movie.routes.js"; // brings in routes for movies

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(cors());
app.use(express.json());

/* === Routes === */
app.get("/api/v1", function (req, res, next) {
  return res.json({
    message: "Welcome to netflix!",
  });
});

app.use("/api/v1/movies", movieRoutes);

/* === Listener === */
app.listen(config.PORT, function () {
  console.log("API is alive!");
});
