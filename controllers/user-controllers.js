const User = require('../models/User'),
  bcrypt = require('bcryptjs');

exports.postCreateUser = async (req, res) => {
  try {
    const { username, password, confirm } = req.body.register;
    const user = await User.findOne({ username });
    const nameMatch = /^(?=[a-z_\d]*[a-z])[a-z_\d]{6,}$/;
    if (password !== confirm) return res.status(500).json({ msg: "Password and confirm must match" });
    if (!username.match(nameMatch)) return res.status(500).json({ msg: "Username may only contain alphanumeric characters and underscores" });
    if (user) return res.status(500).json({ msg: "A user with that name already exists" });
    const newUser = await User.create({ username, password });
    return newUser && res.status(201).json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ msg: "Unable to create user" })
  }
}