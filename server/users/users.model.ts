var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    id: { type: Number, required: true },
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    userType: { type: String, required: true },
  },
  { collection: "users-data" }
);

export interface UserDataInterface {
  id: number;
  userName: string;
  passWord: string;
  userType: string;
}

export var userData = mongoose.model("UserData", UserSchema);
