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
  const param = req.params.date
  const date = `2001-${moment(param).format('MM')}-${moment(param).format('D')}T12:00:00Z`
  const signInfo = data.find(item => compareDates(date, item));
  res.send(signInfo);
})

module.exports = router;