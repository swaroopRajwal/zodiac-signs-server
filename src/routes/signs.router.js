const express = require("express");
const router = express.Router();

const data = require("../../lib/data");

router.get('/', (req, res) => {
  res.send(data);
})

router.get('/:id', (req, res) => {
  const something = data.find(item => item.id.toLowerCase() === req.params.id);

  if(!something) {
    res.send(`route param ${req.params.id} not found :(`);
  } else {
    res.send(something);
  }
})

module.exports = router;