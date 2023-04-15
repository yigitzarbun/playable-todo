const usersModel = require("../users/users-model");

const credentialsExist = (req, res, next) => {
  const { email, fname, lname, password, registry_date } = req.body;
  if (!email || !fname || !lname || !password || !registry_date) {
    res.status(400).json({ message: "Required credentials are missing" });
  } else {
    next();
  }
};

const emailUnique = async (req, res, next) => {
  const { email } = req.body;
  const emailUnique = await usersModel.getByFilter({ email });
  if (emailUnique) {
    res.status(400).json({ message: "Invalid credentials" });
  } else {
    next();
  }
};

const loginCredentialsExist = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Invalid Credentials" });
  } else {
    next();
  }
};

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const emailExists = await usersModel.getByFilter({ email });
  if (!emailExists) {
    res.status(400).json({ message: "Invalid credentials" });
  } else {
    next();
  }
};

module.exports = {
  credentialsExist,
  emailUnique,
  loginCredentialsExist,
  emailExists,
};
