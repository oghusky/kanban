const User = require('../models/User'),
  jwt_decode = require('jwt-decode');

exports.returnUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token)
    if (!token) { res.json({ msg: "You have to login to do that" }) };
    const user = await User.findOne({ _id: jwt_decode(token).id });
    if (!user) { res.json({ msg: "You can't do that" }) };
    req.user = user._id;
    next();
  } catch (err) {
    console.log(err);
  }

}