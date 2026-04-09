const userModel = require("../Model/UserModel");
const { validemail, validpassword, validname } = require("../validation/authorvalidation");
const bcrypt = require("bcrypt");

exports.createuser = async (req, res) => {
  try {
    // const data = req.body;
    // const { name, email, password } = data;

    // const randomOtp = Math.floor(1000 + Math.random() * 9000);

    if (!name) {
      return res.status(400).send({ status: false, message: "name is required" });
    }

    if (!validname(name)) {
      return res.status(400).send({ status: false, message: "name is not valid" });
    }

    // Email validation
    if (!email) {
      return res.status(400).send({ status: false, message: "email is required" });
    }

    if (!validemail(email)) {
      return res.status(400).send({ status: false, message: "email is not valid" });
    }
    // Password validation
if (!password) {
  return res.status(400).send({
    status: false,
    message: "password is required"
  });
}

if (!validpassword(password)) {
  return res.status(400).send({
    status: false,
    message: "password is not valid"
  });
}

// data.otp = randomOtp;
// const hashPassword = await bcrypt.hash(password, 10);
// data.password = hashPassword;

// Create user in DB
const DB = await userModel.create(data);

return res.status(201).send({
  status: true,
  message: "user created successfully",
  data: DB
});

} catch (err) {
  return res.status(500).send({
    status: false,
    message: err.message
  });
}
};