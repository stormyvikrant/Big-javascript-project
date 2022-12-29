const mongoose = require("mongoose");

const hairSchema = new mongoose.Schema(
  {
       
      img_url: { type: String, required: true },
      title:  { type: String, required: true },
      striked_price:  { type: String, required: true },
      price:  { type: Number, required: true },
      off: { type: String, required: true },
      value: { type: String, required: true },
      category: [{ type: String, required: true }]
    

  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Hair = mongoose.model("hair", hairSchema);
module.exports = Hair;