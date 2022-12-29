const Gadget=require("../models/gadget.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const gadget= await Gadget.find({}).lean().exec()
       return res.status(200).send(gadget)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router