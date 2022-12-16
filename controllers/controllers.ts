import { Request, Response } from "express";
const services = require("../services/services");

interface score {
  _id: string;
  name: string;
  score: number;
  __v: number;
}

export const getScores = async (req: Request, res: Response) => {
  try {
    const scores = await services.getScores();
    scores.sort((a: score, b: score) => b.score - a.score).splice(10);
    res.json({ data: scores, status: "success" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createScore = async (req: Request, res: Response) => {
  try {
    console.log("request: ", req.body);
    const score = await services.createScore(req.body);
    res.json({ data: score });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
