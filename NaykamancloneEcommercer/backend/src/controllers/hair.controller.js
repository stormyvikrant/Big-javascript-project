const Hair=require("../models/hair.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const hair= await Hair.find({}).lean().exec()
       return res.status(200).send(hair)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router