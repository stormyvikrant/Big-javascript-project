const Perfume=require("../models/perfume.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const perfume= await Perfume.find({}).lean().exec()
       return res.status(200).send(perfume)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router