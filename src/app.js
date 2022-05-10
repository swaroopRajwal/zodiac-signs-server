// * importing external libraries
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

// * importing routers
const signsRouter = require("./routes/signs.router");
const datesRouter = require("./routes/date.router");

// * setting up the middlewares
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
})

app.use("/signs", signsRouter);
app.use("/date", datesRouter)
app.get("*", (req, res) => {
  res.status(404).send({message: "Route not found"});
})