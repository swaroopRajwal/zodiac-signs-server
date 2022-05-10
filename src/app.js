const express = require("express");
require("dotenv").config();
const app = express();

// * importing routers
const signsRouter = require("./routes/signs.router");
const datesRouter = require("./routes/date.router");

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
})

app.use("/signs", signsRouter);
app.use("/date", datesRouter)
