/* === External Modules === */
import express from "express";
import cors from "cors";

/* === Internal Modules === */
import "./db.connection.js"; // brings in db conection
import config from "@netflix/config"; // brings in all external configuration
import apiRoutes from "./routes.js"; // brings in routes for movies

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
app.use(cors());
app.use(express.json());

/* === Routes === */
// serves all api routes
app.use("/api/v1/", apiRoutes);

// serves react build
app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* === Listener === */
app.listen(config.PORT, function () {
  console.log("API is alive!");
});
