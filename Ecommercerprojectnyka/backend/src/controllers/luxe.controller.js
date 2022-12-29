const Luxe=require("../models/luxe.model")
const express=require("express")
// const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const luxe= await Luxe.find({}).lean().exec()
       return res.status(200).send(luxe)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router