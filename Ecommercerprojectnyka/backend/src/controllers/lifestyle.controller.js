const Lifestyle=require("../models/lifestyle.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const lifestyle= await Lifestyle.find({}).lean().exec()
       return res.status(200).send(lifestyle)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router