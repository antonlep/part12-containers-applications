const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

/* GET index data. */
router.get('/', async (req, res) => {
  let added_todos = await redis.getAsync('added_todos')
  if (!added_todos) {
    added_todos = 0
  }

  res.send({
    "added_todos": parseInt(added_todos)
  });
});

module.exports = router;
