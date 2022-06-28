const express = require("express");
const router = express.Router();

const data = require("../../lib/data");

router.get('/', (req, res) => {
  res.send([...data.map(item => ({
    id: item.id,
    name: item.name,
    indianname: item.indianName,
  }))]);
})

router.get('/:id', (req, res) => {
  const something = data.find(item => item.id.toLowerCase() === req.params.id);

  if(!something) {
    res.status(404).send(`route param ${req.params.id} not found :(`);
  } else {
    res.send(something);
  }
})

module.exports = router;