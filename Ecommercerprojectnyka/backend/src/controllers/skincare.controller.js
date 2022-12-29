const Skin = require("../models/skincare.model");
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const skin = await Skin.find({}).lean().exec();
    return res.status(200).send(skin);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
