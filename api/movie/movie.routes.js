import express from "express";
const router = express.Router();

import { all, show, create, update, destroy } from "./movie.controller.js";

router.get("/", all);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
