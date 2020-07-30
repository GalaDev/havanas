const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Andy',
      email: 'gala@g.com',
      password: '123456',
      isAdmin: true,
    });

    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
