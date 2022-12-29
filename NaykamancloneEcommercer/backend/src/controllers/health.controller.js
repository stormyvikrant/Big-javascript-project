const Health=require("../models/health.model")
const express=require("express")
// const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const health= await Health.find({}).lean().exec()
       return res.status(200).send(health)
   } catch (error) {
       return res.status(400).send(error)
   }
});



module.exports=router