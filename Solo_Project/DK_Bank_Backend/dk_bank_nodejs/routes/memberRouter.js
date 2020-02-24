const express = require("express");
const router = express.Router();
const mongo = require("mongodb");

//const User = require("../models").User;

router.post("/signup", async (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.pw;

  try {
    res.json({ message: name });
    // const result = await User.findOne({ where: email, password });
    //res.json({ nick: result.id, id: result.id });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;
