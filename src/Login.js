import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    navigate("/");
    reset();
  };
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto">
        <h2 className="font-bold text-4xl">Login</h2>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="loginForm flex flex-col mt-4"
        >
          <div className="loginFormContainer">
            <label>Email</label>
            <input
              placeholder="e.g. user@email.com"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="loginFormContainer">
            <label>Password</label>
            <input
              type="text"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="flex">
            <button
              className="mt-4 mr-2  border-2 w-1/2 cursor-pointer border-green-500 rounded-md hover:bg-green-500 hover:text-white p-2"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold">Login</p>
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
        <Link to="/register">
          <p className="mt-8">
            Don't have an account yet?
            <span className="text-blue-400 font-bold ml-2">Register</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
