import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTask, getUser } from "../redux-stuff/actions";

function NewTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user = useSelector((store) => store.user);
  if (user.user) {
    user = user.user;
  } else {
    user = user;
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { importance: "medium", status: "toDo" },
    mode: "onChange",
  });
  const handleNewTask = (data) => {
    const formData = new FormData();
    /*const dataWide = {
      ...data,
      user_id: user.user_id,
      image: data.image[0],
      file: data.file[0],
    };*/
    formData.append("deadline", data.deadline);
    formData.append("description", data.description);
    formData.append("importance", data.importance);
    formData.append("status", data.status);
    formData.append("tag", data.tag);
    formData.append("title", data.title);
    formData.append("user_id", user.user_id);
    formData.append("image", data.image[0]);
    dispatch(addTask(formData, navigate));
    reset();
  };
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-2/3 mx-auto">
        <Link to="/" className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">New Task</h2>
          <img
            src="/images/close.png"
            alt="close"
            className="w-6 h-6 cursor-pointer"
          />
        </Link>
        <form
          onSubmit={handleSubmit(handleNewTask)}
          encType="multipart/form-data"
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
            {errors.title && (
              <span className="fieldError">{errors.title.message}</span>
            )}
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
            {errors.description && (
              <span className="fieldError">{errors.description.message}</span>
            )}
          </div>
          <div className="flex justify-between items-start xs:flex-col">
            <div className="newTaskFormContainer w-2/5">
              <label>Tag</label>
              <input
                type="text"
                {...register("tag", { required: "Task tag is required" })}
              />
              {errors.tag && (
                <span className="fieldError">{errors.tag.message}</span>
              )}
            </div>
            <div className="newTaskFormContainer w-2/5 xs:w-full">
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
              {errors.status && (
                <span className="fieldError">{errors.status.message}</span>
              )}
            </div>
          </div>
          <div className="flex justify-between xs:flex-col">
            <div className="newTaskFormContainer w-2/5 xs:w-full">
              <label>Deadline</label>
              <input
                type="date"
                {...register("deadline", {
                  required: "Task deadline is required",
                })}
                className="h-2/3"
              />
              {errors.deadline && (
                <span className="fieldError">{errors.deadline.message}</span>
              )}
            </div>
            <div className="newTaskFormContainer w-2/5 xs:w-full">
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
              {errors.importance && (
                <span className="fieldError">{errors.importance.message}</span>
              )}
            </div>
          </div>
          <div className="uploadFileContainer">
            <label>
              Image
              <input type="file" name="image" {...register("image")} />
            </label>
          </div>
          <div className="uploadFileContainer">
            <label>
              File
              <input type="file" name="file" {...register("file")} />
            </label>
          </div>
          <div className="flex xs:flex-col">
            <button
              className="mt-4 mr-2  border-2 w-1/2 cursor-pointer border-green-500 rounded-md hover:bg-green-500 hover:text-white p-2 xs:w-full"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold">Submit</p>
            </button>
            <Link
              to="/"
              className="font-bold mt-4 ml-2 w-1/2 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white p-2 text-center xs:w-full xs:ml-0"
            >
              <button>
                <p>Discard</p>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
