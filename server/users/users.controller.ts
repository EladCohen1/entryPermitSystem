var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/entryPermitDB", {
  useNewUrlParser: true,
});
import { userData, UserDataInterface } from "./users.model";

export class usersController {
  public static async getUser() {
    return userData.find();
  }

  public static async createUser(newUserData: UserDataInterface) {
    var newUser = new userData(newUserData);
    return newUser.save();
  }
}

module.exports = usersController;
