import { UserDataInterface } from "./users.model";

var express = require("express");
var router = express.Router();
var usersController = require("./users.controller");

router.post("/", function (req: any, res: any, next: any) {
  usersController
    .createUser(req.body.userName, req.body.passWord, req.body.id)
    .then(function (data: any) {
      res.json(data);
    });
});

router.post("/auth", function (req: any, res: any, next: any) {
  usersController.authUser(req.body).then((data: any) => {
    res.json(data);
  });
});

module.exports = router;
