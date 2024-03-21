import express from "express";
import diagnosesRouter from "./routes/diagnoses";
const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

app.get("/api/ping", (_req, res) => {
  res.status(200).send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
