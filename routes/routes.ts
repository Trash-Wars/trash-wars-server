import express from "express";

import { getScores, createScore } from "../controllers/controllers";

const router = express.Router();

router.route("/").get(getScores).post(createScore);

export default router;
