import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editTask } from "../redux-stuff/actions";

function EditTask(props) {
  const { task, handleEditArea } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
      tag: task.tag,
      status: task.status,
      deadline: task.deadline,
      importance: task.importance,
    },
  });
  const handleEditTask = (data) => {
    const dataWide = {
      ...data,
      task_id: task.task_id,
    };
    dispatch(editTask(dataWide));
    navigate("/");
    handleEditArea();
    reset();
  };

  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-2/3 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">Edit Task</h2>
          <img
            src="/images/close.png"
            alt="close"
            className="w-6 h-6 cursor-pointer"
            onClick={handleEditArea}
          />
        </div>
        <form
          onSubmit={handleSubmit(handleEditTask)}
          className="newTaskForm flex flex-col mt-4"
        >
          <div className="newTaskFormContainer">
            <label>Task Title</label>
            <input
              placeholder="e.g. Grocery Shopping"
              type="text"
              {...register("title", {
                required: "Task title is required",
              })}
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div className="newTaskFormContainer">
            <label>Description</label>
            <textarea
              type="text"
              {...register("description", {
                maxLength: {
                  value: 250,
                  message: "Description cannot be longer than 250 characters",
                },
              })}
            />
            {errors.description && <span>{errors.description.message}</span>}
          </div>
          <div className="flex justify-between">
            <div className="newTaskFormContainer">
              <label>Tag</label>
              <input
                type="text"
                {...register("tag", { required: "Task tag is required" })}
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
            <div className="newTaskFormContainer w-2/5">
              <label>Status</label>
              <select
                {...register("status", {
                  required: "Task status is required",
                })}
                className="h-2/3"
              >
                <option value="toDo">To Do</option>
                <option value="inProgress">In Progress </option>
                <option value="done">Done</option>
              </select>
              {errors.status && <span>{errors.status.message}</span>}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="newTaskFormContainer w-2/5">
              <label>Deadline</label>
              <input
                type="date"
                {...register("deadline", {
                  required: "Task deadline is required",
                })}
                className="h-2/3"
              />
              {errors.deadline && <span>{errors.deadline.message}</span>}
            </div>
            <div className="newTaskFormContainer w-2/5">
              <label>Importance</label>
              <select
                {...register("importance", {
                  required: "Task importance is required",
                })}
                className="h-2/3"
              >
                <option value="low">Low</option>
                <option value="medium">Medium </option>
                <option value="high">High</option>
              </select>
              {errors.importance && <span>{errors.importance.message}</span>}
            </div>
          </div>
          <div className="uploadFileContainer">
            <label>Image</label>
            <input type="file" name="image" />
            {errors.image && <span>{errors.image.message}</span>}
          </div>
          <div className="uploadFileContainer">
            <label>File</label>
            <input type="file" name="file" />
            {errors.file && <span>{errors.file.message}</span>}
          </div>
          <div className="flex">
            <button
              className="mt-4 mr-2  border-2 w-1/2 cursor-pointer border-green-500 rounded-md hover:bg-green-500 hover:text-white p-2"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold">Submit</p>
            </button>
            <button
              onClick={handleEditArea}
              className="font-bold mt-4 ml-2 w-1/2 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white p-2 text-center"
            >
              <p>Discard</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
