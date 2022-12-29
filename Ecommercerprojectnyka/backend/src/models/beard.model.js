const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const beardSchema = new mongoose.Schema(
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

// userSchema.pre("save", function (next) {
//   const hash = bcrypt.hashSync(this.password, 8);
//   this.password = hash;
//   return next();
// });
// userSchema.methods.checkPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };
const Beard = mongoose.model("beard", beardSchema);
module.exports = Beard;