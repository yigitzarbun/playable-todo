import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyTasks } from "../redux-stuff/actions";
function Main() {
  const dispatch = useDispatch();
  const { myTasks, user } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getMyTasks(user));
  }, []);

  console.log(myTasks);
  return (
    <div>
      <Link to="/new-task">New Task</Link>
    </div>
  );
}

export default Main;
