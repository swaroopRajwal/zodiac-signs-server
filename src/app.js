// * importing external libraries
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

// * importing routers
const signsRouter = require("./routes/signs.router");
const datesRouter = require("./routes/date.router");
const imageRouter = require("./routes/image.router");

// * setting up the middlewares
app.use(cors());
app.use(express.static('public'));

// * starting the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
})

// * setting up routers
app.use("/signs", signsRouter);
app.use("/date", datesRouter);
app.use("/image", imageRouter);

app.get("*", (req, res) => {
  res.status(404).send({message: "Route not found"});
})