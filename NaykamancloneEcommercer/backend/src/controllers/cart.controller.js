const Cart=require("../models/cart.model")
const express=require("express")
const authenticate=require("../middlewares/authenticate")

const router=express.Router()


router.post("",authenticate,async(req,res)=>{
   try {
        req.body.userId=req.user;
        var value = req.body.value;
        const cartData = await Cart.find({userId:req.body.userId});

        var flag=0;
        const ittr = cartData.filter(function(e){
                if(e["value"]==value){
                        return e;
                    }
                })
     
         if(ittr.length==0){
            const cart= await Cart.create(req.body);
            console.log(cart);
            return res.status(200).send({cart:cart});
        }else{
           
        return res.status(400).send({ message: "product already present", status: false })
       }
      
   } catch (error) {
       return res.status(400).send(error)
   }
})
router.get("",authenticate,async(req,res)=>{
    try {
        req.body.userId=req.user;
        const cart= await Cart.find({userId:req.body.userId}).lean().exec()
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(400).send(error)
    }
 })
router.post("/:id",authenticate,async(req,res)=>{
    try {
        req.body.userId=req.user;
       await Cart.deleteOne({_id:req.params.id});
        return res.status(200).send({message:"item deleted"})
    } catch (error) {
        return res.status(400).send(error)
    }
})

module.exports=router