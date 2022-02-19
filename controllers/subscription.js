const Subscription = require('../models/Subscription');
const SubscriptionUser = require('../models/SubscriptionUser');

exports.subscription = async (req, res, next) => {
    const { name, price } = req.body;
  
    // Create user
     const subscription = await Subscription.create({name,price});
  
    res.status(200).json({
      success: true,
      data: subscription
    });
};

exports.get_subscription = async (req, res, next) => {

  // Create user
   const subscription = await Subscription.find();

  res.status(200).json({
    success: true,
    data: subscription
  });
};

exports.createsubscription = async(req, res, next) => {
    const { user_id, subscription_id } = req.body;
  
    // Create user
     const subscriptionuser = await SubscriptionUser.create({
      user_id,
      subscription_id,
     });
  
    res.status(200).json({
      success: true,
      data: subscriptionuser
    });   
}