const db = require("../../data/dbConfig");

async function getAll() {
  const users = await db("users");
  return users;
}

async function getByFilter(filter) {
  const user = await db("users").where(filter).first();
  return user;
}

async function getById(user_id) {
  const user = await db("users").where("user_id", user_id);
  return user;
}

async function add(user) {
  const userIdArray = await db("users").insert(user);
  const userId = userIdArray[0];
  const newUser = await db("users").where("user_id", userId).first();
  return newUser;
}

module.exports = {
  getAll,
  getByFilter,
  getById,
  add,
};
