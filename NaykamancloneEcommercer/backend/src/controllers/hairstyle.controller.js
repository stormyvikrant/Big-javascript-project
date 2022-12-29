const Hairstye=require("../models/hairstyle.model")
const express=require("express")
 const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const hairstyle= await Hairstye.find({}).lean().exec()
       return res.status(200).send(hairstyle)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router