import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
function NewTask() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { importance: "medium" } });
  const handleNewTask = (data) => {
    console.log(data);
    navigate("/");
    reset();
  };
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto">
        <h2 className="font-bold text-4xl">New Task</h2>
        <form
          onSubmit={handleSubmit(handleNewTask)}
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
            <div className="newTaskFormContainer w-2/5">
              <label>Deadline</label>
              <input type="date" {...register("deadline")} className="h-2/3" />
              {errors.description && <span>{errors.description.message}</span>}
            </div>
            <div className="newTaskFormContainer w-2/5">
              <label>Importance</label>
              <select {...register("importance")} className="h-2/3">
                <option value="low">Low</option>
                <option value="medium">Medium </option>
                <option value="high">High</option>
              </select>
              {errors.importance && <span>{errors.importance.message}</span>}
            </div>
          </div>
          <div className="uploadFileContainer">
            <label>Image</label>
            <input type="file" />
            {errors.image && <span>{errors.image.message}</span>}
          </div>
          <div className="uploadFileContainer">
            <label>File</label>
            <input type="file" />
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
            <Link
              to="/intro"
              className="font-bold mt-4 ml-2 w-1/2 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white p-2 text-center"
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
