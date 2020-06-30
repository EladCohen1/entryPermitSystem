var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/entryPermitDB", {
  useNewUrlParser: true,
});
import { userData, UserDataInterface } from "./users.model";
const bcrypt = require("bcrypt");

export class usersController {
  public static async createUser(name: string, passWord: string, id: number) {
    var encryptedPass = await bcrypt.hash(passWord, 10);
    var newUserObj: UserDataInterface = {
      id: id,
      userName: name,
      passWord: encryptedPass,
      userType: "guest",
    };
    var newUser = new userData(newUserObj);
    return newUser.save();
  }

  public static async authUser(userDataToAuth: UserDataInterface) {
    var user = await userData.find({
      userName: userDataToAuth.userName,
    });
    if (user[0]) {
      if (await bcrypt.compare(userDataToAuth.passWord, user[0].passWord)) {
        return user;
      }
    }
    return false;
  }
}

module.exports = usersController;
