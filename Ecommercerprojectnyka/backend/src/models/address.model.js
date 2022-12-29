const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema(
  {
    country: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    postal: { type: Number, required: true },
    address: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Address = mongoose.model("address", addressSchema);
module.exports = Address;
