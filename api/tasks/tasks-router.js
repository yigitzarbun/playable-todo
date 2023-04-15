const router = require("express").Router();
const tasksModel = require("./tasks-model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await tasksModel.getAll();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await tasksModel.getById(id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await tasksModel.add(req.body);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await tasksModel.update(req.params.id, req.body);
    const updatedTask = await tasksModel.getById(req.params.id);
    res.status(201).json(updatedTask);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTask = await tasksModel.remove(req.params.id);
    res.status(201).json(deletedTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;