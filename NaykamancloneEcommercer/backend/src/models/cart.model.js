const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
       
      img_url: { type: String, required: true },
      title:  { type: String, required: true },
      striked_price:  { type: String, required: true },
      price:  { type: Number, required: true },
      off: { type: String, required: true },
      value: { type: String, required: true },
      category: [{ type: String, required: true }],
      userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
      }
    

  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;