const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const jwtToken = 'hamzais@goodboY'
// create a user using post create user no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body(
      "password",
      "Enter a valid password of length greater than or equal to 5"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: " Sorry a User with this email already exist" });
      }

      const salt = bcrypt.genSaltSync(10);
      const passsecure = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: passsecure,
        email: req.body.email,
      });

      //   .then(user => res.json(user)).catch(err => console.log(err)
      // );
      // res.json({error:"please enter a unique email"})
      const data = {
        user:{
            id:user.id
        }
      }
      const authtoken = jwt.sign(data, jwtToken);
    //   console.log(token)
      res.json({authtoken});
    } catch (error) {
      console.error(error.message);
    }
  }
);
module.exports = router;
