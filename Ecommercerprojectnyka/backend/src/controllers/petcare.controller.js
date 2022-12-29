const Pet=require("../models/petcare.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.get("",async(req,res)=>{
   try {
       const pet= await Pet.find({}).lean().exec()
       return res.status(200).send(pet)
   } catch (error) {
       return res.status(400).send(error)
   }
})



module.exports=router