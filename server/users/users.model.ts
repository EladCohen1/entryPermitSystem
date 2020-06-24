var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    passWord: { type: String, required: true },
  },
  { collection: "users-data" }
);

var userData = mongoose.model("UserData", UserSchema);

module.exports = userData;
