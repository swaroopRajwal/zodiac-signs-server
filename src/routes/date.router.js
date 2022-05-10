const express = require("express");
const moment = require("moment")

const router = express.Router();

const data = require("../../lib/data");

const compareDates = (date, item) => {
  if(moment(item.date.start).isBefore(date) || moment(item.date.start).isSame(date)) {
    if(moment(item.date.end).isAfter(date) || moment(item.date.end).isSame(date)) {
      return true;
    }
  }
}

router.get("/:date", (req, res) => {
  const date = req.params.date

  const signInfo = data.find(item => compareDates(date, item));
  res.send(signInfo);
})

module.exports = router;