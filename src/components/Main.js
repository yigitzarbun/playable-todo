import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyTasks } from "../redux-stuff/actions";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Done from "./Done";
function Main() {
  const dispatch = useDispatch();
  const { myTasks, user, allTasks } = useSelector((store) => store);
  const [display, setDisplay] = useState("toDo");
  const handleDisplay = (value) => {
    setDisplay(value);
  };
  const activeColor = {
    backgroundColor: "rgb(59 130 246)",
    border: "rgb(59 130 246 / var(--tw-bg-opacity))",
    color: "white",
  };
  const [searchTerm, setSetSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSetSearchTerm(event.target.value);
  };
  const clearSearchTerm = () => {
    setSetSearchTerm("");
  };
  useEffect(() => {
    dispatch(getMyTasks(user));
  }, [allTasks]);
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
        <select onChange={handleSearch}>
          <option></option>
          {myTasks.map((t) => (
            <option key={t.task_id}>{t.tag}</option>
          ))}
        </select>
        <input
          type="text"
          className="searchBar w-2/5 rounded-md text-black px-2 py-3"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by task title or category"
        />
        {searchTerm && (
          <button
            onClick={clearSearchTerm}
            className="w-1/5 font-bold border-2  cursor-pointer border-slate-950 rounded-md hover:border-red-500 hover:text-red-500 p-1"
          >
            Clear
          </button>
        )}
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
        {display === "toDo" && (
          <ToDo myTasks={myTasks} searchTerm={searchTerm} />
        )}
        {display === "inProgress" && (
          <InProgress myTasks={myTasks} searchTerm={searchTerm} />
        )}
        {display === "done" && (
          <Done myTasks={myTasks} searchTerm={searchTerm} />
        )}
      </main>
    </div>
  );
}

export default Main;
