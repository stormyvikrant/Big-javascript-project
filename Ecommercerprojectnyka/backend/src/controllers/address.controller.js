const Address = require("../models/address.model");
const express = require("express");
const authenticate=require("../middlewares/authenticate")

const router = express.Router();

// router.get("", async (req, res) => {
//   try {
//     const address = await Address.find({}).lean().exec();
//     return res.status(200).send(address);
//   } catch (error) {
//     return res.status(400).send(error);
//   }
// });
router.post("",authenticate, async (req, res) => {
  try {
      req.body.userId=req.user
      console.log(req.user)
    const address = await Address.create(req.body);
    return res.status(200).send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("",authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    const address = await Address.find({userId:req.body.userId}).lean().exec();
    return res.status(200).send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});


router.delete("/:id",authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    console.log(req.user);
    const address = await Address.findByIdAndDelete({_id:req.params.id});
    return res.status(200).send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});


module.exports = router;
