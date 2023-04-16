import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux-stuff/actions";
import EditTask from "./EditTask";
function Task(props) {
  const { task } = props;
  const [editArea, setEditArea] = useState(false);
  const handleEditArea = () => {
    setEditArea(!editArea);
  };
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTask(task.task_id));
  };
  return (
    <div>
      {editArea ? (
        <EditTask task={task} handleEditArea={handleEditArea} />
      ) : (
        <div className="flex flex-col bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.deadline}</p>
          <p>{task.importance}</p>
          <p>{task.status}</p>
          <div className="flex justify-between mt-4">
            <div className="flex" onClick={handleEditArea}>
              <img
                src="/images/editTask.png"
                alt="edit-task"
                className="w-6 h-6"
              />
              <button>Edit</button>
            </div>
            <div className="flex" onClick={handleDeleteTask}>
              <img
                src="/images/deleteTask.png"
                alt="delete-task"
                className="w-6 h-6"
              />
              <button>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
