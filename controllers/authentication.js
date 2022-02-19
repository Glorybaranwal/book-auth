const User = require('../models/User');

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Create user
   const user = await User.create({name,email,password});

  res.status(200).json({
    success: true,
    data: req.body
  });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    // Validate emil & password
    if (!email || !password) {
      res.status(401).json({
          success: false,
          message: "Either email or password not provided.",
          data: user
      });
    }

    // // Check for user
    const user = await User.findOne({ email, password }).select('+password');

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Either email or password not invalid.",
        data: user
      });
    }
    else {
      res.status(200).json({
        success: true,
        message: "Login Success.",
        data: user
      });
    }
};