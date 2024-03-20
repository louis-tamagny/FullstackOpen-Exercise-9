import express from "express";
const app = express();

app.get("/api/ping", (_req, res) => {
  res.status(200).send("pong");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
