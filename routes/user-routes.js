const router = require('express').Router(),
  { postCreateUser } = require('../controllers/user-controllers');

router
  .route("/")
  .post(postCreateUser);

module.exports = router;