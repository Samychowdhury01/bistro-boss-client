/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //   handler for registration
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, captcha, photo } = data;

    setErrorMessage("");

    if (captcha === "") {
      setErrorMessage("fill the captcha field");
      return;
    } else if (!validateCaptcha(captcha)) {
      setErrorMessage("wrong captcha, try again !!");
      return;
    }
    // registration functionalities starts here
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo);
        const createdUser = result.user;
        console.log(email, name)
        const saveUser = {email, name }
        fetch('http://localhost:5000/users', {
          method: "POST",
          headers:{
            'content-type': "application/json"
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
           
            toast.success("You have successfully created an account");
            navigate(location?.state?.from?.pathname || "/");
            reset();
          }
        })
        
      })

      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Something is wrong, Try Again!!");
      });
  };

  // for captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <Helmet>
        <title> Bistro Boss | Register</title>
      </Helmet>

      <div className="hero min-h-screen form-bg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="login-image" />
          </div>
          <div className="md:w-2/3 rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-center text-4xl font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer absolute right-4 top-12 "
                >
                  {showPass ? (
                    <FaEye className="text-2xl" />
                  ) : (
                    <FaEyeSlash className="text-2xl" />
                  )}
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase <br /> one lower case, one
                    number and one special character.
                  </p>
                )}
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    {...register("captcha")}
                    name="captcha"
                    placeholder="type the captcha here...."
                    className="input input-bordered"
                  />
                </div>
                <label className="text-center mt-3 text-red-600 font-bold">
                  <p>{errorMessage}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-[#d1a054b3] border-none"
                />
              </div>
              <label className="mt-3 text-lg text-[#d1a054b3]">
                <span>Already registered? </span>
                <Link
                  to="/login"
                  state={location?.state}
                  className="text-[#d1a054b3] hover:link link-neutral font-bold duration-300 transition-all"
                >
                  Go to log in
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
