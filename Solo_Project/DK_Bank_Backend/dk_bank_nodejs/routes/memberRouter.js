const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  console.log(req.body);
  var email = req.body.email;
  var password = req.body.pw;

  try {
    res.json({ nick: result.id, id: result.id });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;
