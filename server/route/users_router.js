const express = require('express');
const users = require('../controller/users_controller');
const router = express.Router();

//Register User route
router.post('/register', users.registerProcess);
//Login User route
router.post('/login', users.loginProcess);

module.exports = router;
