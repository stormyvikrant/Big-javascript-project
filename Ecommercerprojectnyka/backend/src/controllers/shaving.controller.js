const Shaving = require("../models/shaving.model")
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const shaving = await Shaving.find({}).lean().exec();
    return res.status(200).send(shaving);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;