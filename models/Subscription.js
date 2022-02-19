const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  price:{
      type: String,
      required: [true, 'Please add a price'],
  }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
