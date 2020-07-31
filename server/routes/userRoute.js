const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const getToken = require('../utils');

router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: 'Invalid Email or Password' });
  }
});

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await User.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: 'Invalid User Data' });
  }
});

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Guest',
      email: 'guest@guest.com',
      password: '123456',
      isAdmin: false,
    });

    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
