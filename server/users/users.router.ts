var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/entryPermitDB", {
  useNewUrlParser: true,
});
var userData = require("./users.model");

/* GET home page. */
router.get("/", function (req: Request, res: any, next: any) {
  userData.find().then(function (data: any) {
    res.json(data);
  });
});

router.post("/", function (req: Request, res: any, next: any) {
  var newUser = new userData(req.body);
  newUser.save();
  res.json({ ok: "ok" });
});

module.exports = router;
