const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const shavingSchema = new mongoose.Schema(
  {
    img_url: { type: String, required: true },
    title: { type: String, required: true },
    striked_price: { type: String, required: true },
    price: { type: Number, required: true },
    off: { type: String, required: true },
    value: { type: String, required: true },
    category: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


const Shaving = mongoose.model("shaving", shavingSchema);
module.exports = Shaving;