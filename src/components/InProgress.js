import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
function InProgress(props) {
  const { myTasks, searchTerm } = props;
  let resultJsx = "";
  let toDoTasks = "";
  if (myTasks === null) {
    resultJsx = "Loading tasks";
  } else if (myTasks.length === 0) {
    resultJsx = (
      <div>
        <p className="font-bold text-xl">No tasks available</p>
        <p className="mb-4">Create your first task</p>
        <Link to="/new-task">
          <button className="bg-black text-white block p-3 w-1/3 hover:bg-blue-600 disabled:bg-slate-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl">
            Create Task
          </button>
        </Link>
      </div>
    );
  } else if (
    Array.isArray(myTasks) &&
    myTasks != null &&
    myTasks != undefined
  ) {
    toDoTasks = myTasks.filter((task) => task.status === "inProgress");
    resultJsx = toDoTasks
      .filter((task) => {
        if ((task.title && task.title == "") || (task.tag && task.tag == "")) {
          return task;
        } else if (
          (task.title &&
            task.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (task.tag &&
            task.tag.toLowerCase().includes(searchTerm.toLowerCase()))
        ) {
          return task;
        }
      })
      .map((task) => <Task key={task.task_id} task={task} />);
  }

  return <div>{resultJsx}</div>;
}
export default InProgress;
