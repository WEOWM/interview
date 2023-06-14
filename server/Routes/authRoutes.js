const express = require("express");
const authModel = require("../models/auth");

const router = express.Router();

router.post("/sign-up", (req, res) => {
  authModel
    .create(req.body)
    .then((user) => {
      res.json({
        results: user,
        message: "Account created successfull",
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/list", async (req, res) => {
  try {
    const user = await authModel.find();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  authModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          userID: user._id,
          Token: "done",
          message: "Account login successfully",
        });
      } else {
        res.json({
          Token: "",
          message: "The password is incorrect",
        });
      }
    } else {
      res.json({
        Token: "",
        message: "No user found",
       
      });
    }
  });
});

router.get("/user/details/:id", async (req, res) => {
  try {
    const user = await authModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
