const router = require("express").Router();
const tasksModel = require("./tasks-model");
const path = require("path");

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
    if (req.files !== null) {
      if (req.files.image && req.files.file) {
        const image = req.files.image;
        const imagePath = path.join(
          __dirname,
          "../../public/images",
          image.name
        );
        await image.mv(imagePath);
        const file = req.files.file;
        const filePath = path.join(__dirname, "../../public/files", file.name);
        await file.mv(filePath);
        const task = await tasksModel.add({
          ...req.body,
          image: image.name,
          file: file.name,
        });
        res.status(201).json(task);
      } else if (req.files.image && req.files.file == null) {
        const image = req.files.image;
        const imagePath = path.join(
          __dirname,
          "../../public/images",
          image.name
        );
        await image.mv(imagePath);
        const task = await tasksModel.add({
          ...req.body,
          image: image.name,
        });
        res.status(201).json(task);
      } else if (req.files.image == null && req.files.file) {
        const file = req.files.file;
        const filePath = path.join(__dirname, "../../public/files", file.name);
        await file.mv(filePath);
        const task = await tasksModel.add({
          ...req.body,
          file: file.name,
        });
        res.status(201).json(task);
      }
    } else {
      const task = await tasksModel.add({
        ...req.body,
      });
      res.status(201).json(task);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    if (req.files !== null) {
      if (req.files.image && req.files.file) {
        const image = req.files.image;
        const imagePath = path.join(
          __dirname,
          "../../public/images",
          image.name
        );
        await image.mv(imagePath);
        const file = req.files.file;
        const filePath = path.join(__dirname, "../../public/files", file.name);
        await file.mv(filePath);
        const updates = {
          ...req.body,
          image: image.name,
          file: file.name,
        };
        await tasksModel.update(updates.task_id, updates);
        const updatedTask = await tasksModel.getById(updates.task_id);
        res.status(201).json(updatedTask);
      } else if (req.files.image && req.files.file == null) {
        const image = req.files.image;
        const imagePath = path.join(
          __dirname,
          "../../public/images",
          image.name
        );
        await image.mv(imagePath);
        const updates = {
          ...req.body,
          image: image.name,
        };
        await tasksModel.update(updates.task_id, updates);
        const updatedTask = await tasksModel.getById(updates.task_id);
        res.status(201).json(updatedTask);
      } else if (req.files.image == null && req.files.file) {
        const file = req.files.file;
        const filePath = path.join(__dirname, "../../public/files", file.name);
        await file.mv(filePath);
        const updates = {
          ...req.body,
          file: file.name,
        };
        await tasksModel.update(updates.task_id, updates);
        const updatedTask = await tasksModel.getById(updates.task_id);
        res.status(201).json(updatedTask);
      }
    } else {
      const updates = req.body;
      await tasksModel.update(updates.task_id, updates);
      const updatedTask = await tasksModel.getById(updates.task_id);
      res.status(201).json(updatedTask);
      console.log(updates);
    }
  } catch (error) {
    next(error);
  }
});

/*
const updates = req.body;
    await tasksModel.update(req.params.id, updates);
    const updatedTask = await tasksModel.getById(req.params.id);
    res.status(201).json(updatedTask);
*/

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedTask = await tasksModel.remove(req.params.id);
    res.status(201).json(deletedTask);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
