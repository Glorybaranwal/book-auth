const express = require('express');
const {
  register,
  login
} = require('../controllers/authentication');

// const User = require('../models/User');

const router = express.Router({ mergeParams: true });

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;
