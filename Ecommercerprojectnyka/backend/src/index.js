
const cors=require("cors");

const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.use(cors())

const { register, login } = require("./controllers/auth.controller");

const personalcareController=require("./controllers/personalcare.controller") 
const skincareController = require("./controllers/skincare.controller"); 
const luxeController = require("./controllers/luxe.controller");
const healthController = require("./controllers/health.controller");  
const addressController = require("./controllers/address.controller"); 
const lifestyleController=require("./controllers/lifestyle.controller")
const petcareController = require("./controllers/lifestyle.controller");
const cartController=require("./controllers/cart.controller")
const perfumeController=require("./controllers/perfume.controller")
const shavingController=require("./controllers/shaving.controller")
const professionalhairController=require("./controllers/professionalhair.controller")
const beardController=require("./controllers/beard.controller")
const hairstyleController=require("./controllers/hairstyle.controller")
const hairController=require("./controllers/hair.controller")
const gadgetController=require("./controllers/gadget.contriller")


//__dirname+"/view/home.html
app.get("/",(req,res)=>{
res.send("welcome Nykaaman.com clone")
})

app.post("/register", register);
app.post("/login", login);


app.use("/beards",beardController)
app.use("/personals",personalcareController)
app.use("/skins", skincareController);
app.use("/luxes", luxeController);
app.use("/healths", healthController);
app.use("/addresses",addressController);
app.use("/lifestyles", lifestyleController);
app.use("/pets", petcareController);
app.use("/carts",cartController)
app.use("/perfumes",perfumeController)
app.use("/shavings",shavingController)
app.use("/professionalhairs",professionalhairController)
app.use("/hairstyles",hairstyleController)
app.use("/hairs",hairController)
app.use("/gadgets",gadgetController)

module.exports = app;
