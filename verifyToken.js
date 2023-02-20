const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  var token = req.headers.token
  req.token = token;
  await jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
      return res
        .status(403)
        .json("Your session has timedout Or Access Deneid.Please Login!");
    } else {
      next();
    }
  });
};
module.exports.validateToken = validateToken;
