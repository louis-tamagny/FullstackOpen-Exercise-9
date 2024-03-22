import express from "express";
import diagnosesRouter from "./routes/diagnoses";
import patientRouter from "./routes/patients";
const app = express();
app.use(express.json());

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.get("/api/ping", (_req, res) => {
  res.status(200).send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
