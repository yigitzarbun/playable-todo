import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
function Done(props) {
  const { myTasks, searchTerm, clearSearchTerm, setSetSearchTerm } = props;
  let resultJsx = "";
  let doneTasks = "";
  if (myTasks === null) {
    resultJsx = "Loading tasks";
  } else if (myTasks.filter((t) => t.status == "done").length === 0) {
    resultJsx = (
      <div className="text-center mt-8">
        <p className="font-bold text-xl">No tasks are done yet</p>
      </div>
    );
  } else if (
    Array.isArray(myTasks) &&
    myTasks != null &&
    myTasks != undefined
  ) {
    doneTasks = myTasks.filter((task) => task.status === "done");
    resultJsx = doneTasks
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
      .map((task) => (
        <Task
          key={task.task_id}
          task={task}
          setSetSearchTerm={setSetSearchTerm}
        />
      ));
  }

  return (
    <div>
      {resultJsx.length == 0 && searchTerm.length > 0 ? (
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold">
            There are no tasks matching your criteria.
          </h2>
          <p className="mt-4">
            Try clearing filter or search to view available tasks, if there are
            any.
          </p>
          <button
            onClick={clearSearchTerm}
            className="w-1/5 font-bold border-2 mt-4 cursor-pointer border-slate-950 rounded-md hover:border-red-500 hover:text-red-500 p-1"
          >
            Clear
          </button>
        </div>
      ) : (
        resultJsx
      )}
    </div>
  );
}
export default Done;
