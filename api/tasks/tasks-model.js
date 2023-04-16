const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks")
    .leftJoin("users", "users.user_id", "tasks.user_id")
    .select("tasks.*", "users.*");
  return tasks;
}

async function getByFilter(filter) {
  const result = await db("tasks").where(filter).first();
  return result;
}

async function getById(task_id) {
  const result = await db("tasks").where("task_id", task_id).first();
  return result;
}

async function add(task) {
  const taskIdArray = await db("tasks").insert(task);
  const taskId = taskIdArray[0];
  const newTask = await db("tasks").where("task_id", taskId).first();
  return newTask;
}

async function update(task_id, changes) {
  return db("tasks").where("task_id", task_id).update(changes);
}

async function remove(task_id) {
  return db("tasks").where("task_id", task_id).del();
}

module.exports = { getAll, getByFilter, getById, add, update, remove };
