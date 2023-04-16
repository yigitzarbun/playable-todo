import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux-stuff/actions";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handleRegister = (data) => {
    let dataWide = {
      ...data,
      registry_date: Date.now(),
    };
    delete dataWide.password2;
    dispatch(registerUser(dataWide, navigate));
  };
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 mt-8 rounded-md shadow-md w-1/2 mx-auto xs:w-2/3">
        <h2 className="font-bold text-4xl">Register</h2>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="registerForm flex flex-col mt-4"
        >
          <div className="registerFormContainer">
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
          <div className="registerFormContainer">
            <label>First Name</label>
            <input
              placeholder="e.g. John"
              type="text"
              {...register("fname", {
                required: "First name is required",
              })}
            />
            {errors.fname && <span>{errors.fname.message}</span>}
          </div>
          <div className="registerFormContainer">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="e.g. Doe"
              {...register("lname", {
                required: "Last name is required",
              })}
            />
            {errors.lname && <span>{errors.lname.message}</span>}
          </div>
          <div className="registerFormContainer">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  minLength: 4,
                  message: "Password length must be more than 4 characters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="registerFormContainer">
            <label>Repeat Password</label>
            <input
              type="password"
              {...register("password2", {
                required: "Password is required",
                minLength: {
                  minLength: 4,
                  message: "Password length must be more than 4 characters",
                },
                validate: {
                  passEqual: (value) =>
                    value === getValues().password || "Passwords don't match",
                },
              })}
            />
            {errors.password2 && <span>{errors.password2.message}</span>}
          </div>
          <div className="flex">
            <button
              className="mt-4 mr-2  border-2 w-1/2 cursor-pointer border-green-500 rounded-md hover:bg-green-500 hover:text-white p-2"
              disabled={!isValid}
              type="submit"
            >
              <p className="font-bold">Register</p>
            </button>
            <Link
              to="/"
              className="font-bold mt-4 ml-2 w-1/2 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white p-2 text-center"
            >
              <button>
                <p>Discard</p>
              </button>
            </Link>
          </div>
        </form>
        <Link to="/login">
          <p className="mt-8">
            Do you already have an account?{" "}
            <span className="text-blue-400 font-bold">Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
