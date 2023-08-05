const express = require("express");
const app = express();
const studentRoutes = require("./students/routes");
require('dotenv').config();

app.use(express.json());

app.get("/", (req, res) => res.send("welcome to the homepage"));

app.use("/api/v1/students",studentRoutes);

const PORT= process.env.DATABASE_PORT
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
