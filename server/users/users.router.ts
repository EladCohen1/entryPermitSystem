var express = require("express");
var router = express.Router();
var usersController = require("./users.controller");

/* GET home page. */
router.get("/", function (req: Request, res: any, next: any) {
  usersController.getUser().then(function (data: any) {
    res.json(data);
  });
});

router.post("/", function (req: Request, res: any, next: any) {
  usersController.createUser(req.body).then(function (data: any) {
    res.json(data);
  });
});

module.exports = router;
