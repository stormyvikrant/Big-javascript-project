const Personal=require("../models/personalcare.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const personal= await Personal.find({}).lean().exec()
       return res.status(200).send(personal)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router