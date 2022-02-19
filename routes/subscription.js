const express = require('express');
const {
  subscription,
  createsubscription,
  get_subscription
} = require('../controllers/subscription');

// const User = require('../models/User');

const router = express.Router({ mergeParams: true });

router.route('/').post(subscription);
router.route('/get-subscription').get(get_subscription);
router.route('/attach-user-to-subscription').post(createsubscription);

module.exports = router;
