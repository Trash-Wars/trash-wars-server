import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
const uri = process.env.URI;

mongoose.connect(uri!);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use("/api/scores", router);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world this is a test");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
