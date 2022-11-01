const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controllers");
const { validateAuth } = require("../middlewares/authUser");


router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
