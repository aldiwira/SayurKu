const Express = require("express");
const users = require("../controller/users_controller");
const router = Express.Router();

//Register User route
router.post("/register", users.registerProcess);
//Login User route
router.post("/login", users.loginProcess);

module.exports = router;
