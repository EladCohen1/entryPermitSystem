var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/entryPermitDB", {
  useNewUrlParser: true,
});
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

/* GET home page. */
router.get("/", function (req: Request, res: any, next: any) {
  userData.find().then(function (data: any) {
    res.json(data);
  });
});

router.post("/", function (req: Request, res: any, next: any) {
  var newUser = new userData(req.body);
  newUser.save();
  res.send("good");
});

module.exports = router;
