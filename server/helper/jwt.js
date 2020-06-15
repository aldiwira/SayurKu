const jwt = require("jsonwebtoken");
module.exports = {
  JWTSign: (id) => {
    return jwt.sign({ _id: id, createdAt: Date.now() }, "key-api");
  },
};
