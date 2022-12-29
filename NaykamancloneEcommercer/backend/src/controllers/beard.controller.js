const Beard = require("../models/beard.model")
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const beard= await Beard.find({}).lean().exec();
    return res.status(200).send(beard);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;