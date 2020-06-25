var express = require("express");
var router = express.Router();
var usersController = require("./users.controller");

router.post("/", function (req: Request, res: any, next: any) {
  usersController.createUser(req.body).then(function (data: any) {
    res.json(data);
  });
});

router.post("/auth", function (req: Request, res: any, next: any) {
  usersController.authUser(req.body).then(function (data: any) {
    res.json(data);
  });
});

module.exports = router;
