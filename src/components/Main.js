import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyTasks } from "../redux-stuff/actions";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Done from "./Done";
function Main() {
  const dispatch = useDispatch();
  const { myTasks, user } = useSelector((store) => store);
  const [display, setDisplay] = useState("toDo");
  const handleDisplay = (value) => {
    setDisplay(value);
  };
  const activeColor = {
    backgroundColor: "rgb(59 130 246)",
    border: "rgb(59 130 246 / var(--tw-bg-opacity))",
    color: "white",
  };
  console.log(user);
  console.log(myTasks);
  useEffect(() => {
    dispatch(getMyTasks(user));
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/new-task" className="inline-flex	">
          <div className=" inline-flex	items-center mr-4">
            <img
              src="/images/newTask.png"
              alt="add-task"
              className="w-8 h-8 mr-2"
            />
            <p>New Task</p>
          </div>
        </Link>
        <input
          type="text"
          className="searchBar w-2/5 rounded-md text-black px-2 py-3"
          placeholder="Search by task title or category"
        />
        <div className="flex justify-between w-1/5 ">
          <button className=" font-bold border-2  cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2">
            Search
          </button>
          <button className=" font-bold border-2  cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2">
            Clear
          </button>
        </div>
      </div>
      <main className="flex flex-col mt-8">
        <div className="flex justify-between">
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2"
            onClick={() => handleDisplay("toDo")}
            style={display == "toDo" ? activeColor : {}}
          >
            To Do
          </button>
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2"
            onClick={() => handleDisplay("inProgress")}
            style={display == "inProgress" ? activeColor : {}}
          >
            In Progress
          </button>
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2"
            onClick={() => handleDisplay("done")}
            style={display == "done" ? activeColor : {}}
          >
            Done
          </button>
        </div>
        {display === "toDo" && <ToDo myTasks={myTasks} />}
        {display === "inProgress" && <InProgress myTasks={myTasks} />}
        {display === "done" && <Done myTasks={myTasks} />}
      </main>
    </div>
  );
}

export default Main;
