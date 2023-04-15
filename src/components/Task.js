import React from "react";

function Task(props) {
  const { task } = props;
  return (
    <div>
      <div className="flex flex-col bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.deadline}</p>
        <p>{task.importance}</p>
        <p>{task.status}</p>
      </div>
    </div>
  );
}

export default Task;
