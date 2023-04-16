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
    <div className="mb-8">
      <div className="flex justify-between border-b-2 border-b-black pb-4 xs:flex-col xs:items-center">
        <Link to="/new-task" className="inline-flex	">
          <div className=" inline-flex	items-center mr-4 ">
            <img
              src="/images/newTask.png"
              alt="add-task"
              className="w-8 h-8 mr-2"
            />
            <p className="font-bold">New Task</p>
          </div>
        </Link>
        <select
          onChange={handleSearch}
          className="searchBar w-1/5 rounded-md text-black px-2 py-3 border-2 border-slate-950 hover:border-blue-500 bg-[#F5F5DC] xs:w-1/2 xs:mt-2"
        >
          <option className="font-bold" value="">
            Tags
          </option>
          {myTasks.map((t) => (
            <option className="font-bold" key={t.task_id}>
              {t.tag}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="placeholder-black searchBar w-2/5 rounded-md text-black px-2 py-3 border-2 border-slate-950 hover:border-blue-500 bg-[#F5F5DC] xs:w-1/2 xs:mt-2"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title / category"
        />
        <button
          onClick={clearSearchTerm}
          className="font-bold border-2  cursor-pointer border-slate-950 rounded-md hover:border-red-500 hover:text-red-500 p-1 xs:mt-2"
        >
          Clear
        </button>
      </div>
      <main className="flex flex-col mt-8">
        <div className="flex justify-between xs:flex-col xs:items-center">
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2 xs:w-1/2 xs:mt-2"
            onClick={() => handleDisplay("toDo")}
            style={display == "toDo" ? activeColor : {}}
          >
            To Do
          </button>
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2 xs:w-1/2 xs:mt-2"
            onClick={() => handleDisplay("inProgress")}
            style={display == "inProgress" ? activeColor : {}}
          >
            In Progress
          </button>
          <button
            className=" font-bold   border-2 w-1/4 cursor-pointer border-slate-950 rounded-md hover:border-blue-500 hover:text-blue-500 p-2 xs:w-1/2 xs:mt-2"
            onClick={() => handleDisplay("done")}
            style={display == "done" ? activeColor : {}}
          >
            Done
          </button>
        </div>
        {display === "toDo" && (
          <ToDo
            myTasks={myTasks}
            searchTerm={searchTerm}
            clearSearchTerm={clearSearchTerm}
            setSetSearchTerm={setSetSearchTerm}
          />
        )}
        {display === "inProgress" && (
          <InProgress
            myTasks={myTasks}
            searchTerm={searchTerm}
            clearSearchTerm={clearSearchTerm}
            setSetSearchTerm={setSetSearchTerm}
          />
        )}
        {display === "done" && (
          <Done
            myTasks={myTasks}
            searchTerm={searchTerm}
            clearSearchTerm={clearSearchTerm}
            setSetSearchTerm={setSetSearchTerm}
          />
        )}
      </main>
    </div>
  );
}

export default Main;
