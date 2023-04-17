import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux-stuff/actions";
import { formatDistanceToNow } from "date-fns";
import EditTask from "./EditTask";
function Task(props) {
  const { task, setSetSearchTerm } = props;
  const [editArea, setEditArea] = useState(false);
  const handleEditArea = () => {
    setEditArea(!editArea);
  };
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.task_id));
  };
  const handleEditTask = (event) => {
    const dataWide = {
      task_id: task.task_id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      importance: task.importance,
      tag: task.tag,
      status: event.target.value,
      user_id: task.user_id,
    };
    dispatch(editTask(dataWide));
  };
  const distanceToNow = formatDistanceToNow(new Date(task.deadline), {
    addSuffix: true,
  });
  const passedDeadline = {
    color: "red",
  };
  const statuses = ["toDo", "inProgress", "done"];
  let status = "";
  if (task.status == "toDo") {
    status = "To Do";
  } else if (task.status == "inProgress") {
    status = "In Progress";
  } else {
    status = "Done";
  }
  console.log(task);
  return (
    <div>
      {editArea ? (
        <EditTask task={task} handleEditArea={handleEditArea} />
      ) : (
        <div className="flex flex-col bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto">
          <div className="flex justify-between items-center">
            <p
              className="text-xs italic"
              style={
                distanceToNow.includes("ago")
                  ? passedDeadline
                  : { color: "#66FF99" }
              }
            >
              {distanceToNow}
            </p>
            {task.image != "undefined" && (
              <img
                src={`images/${task.image}`}
                alt="task-image"
                className="w-8 h-8 rounded-full"
              />
            )}
            {task.importance == "low" ? (
              <p className="text-xs italic text-blue-300">{task.importance}</p>
            ) : task.importance == "medium" ? (
              <p className="text-xs italic text-yellow-300">
                {task.importance}
              </p>
            ) : (
              <p className="text-xs italic text-red-300">{task.importance}</p>
            )}
          </div>
          <h2 className="font-bold text-xl">{task.title}</h2>
          <p className="mt-2">{task.description}</p>
          <div className="flex justify-between mt-8">
            <div
              className="flex cursor-pointer"
              onClick={() => setSetSearchTerm(task.tag)}
            >
              <img
                src="/images/hashtag.png"
                alt="tag"
                className="w-6 h-6 mr-2"
              />
              <p className="italic text-sm text-blue-300">{task.tag}</p>
            </div>
            <select
              onChange={handleEditTask}
              className="bg-slate-800 rounded-md border-blue-400 border-2"
            >
              <option>{status}</option>
              {statuses
                .filter((s) => s != task.status)
                .map((s) => (
                  <option key={s} value={s}>
                    {s == "toDo" && "To Do"}
                    {s == "inProgress" && "In Progress"}
                    {s == "done" && "Done"}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex justify-between mt-8">
            <div className="flex cursor-pointer" onClick={handleEditArea}>
              <img
                src="/images/editTask.png"
                alt="edit-task"
                className="w-6 h-6 mr-2"
              />
              <button className="text-blue-300 text-sm">Edit</button>
            </div>
            <div className="flex cursor-pointer" onClick={handleDeleteTask}>
              <img
                src="/images/deleteTask.png"
                alt="delete-task"
                className="w-6 h-6 mr-2"
              />
              <button className="text-blue-300 text-sm">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
