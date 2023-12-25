const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({ mssg: "hello people" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
