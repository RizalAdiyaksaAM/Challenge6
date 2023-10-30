import React, { useState } from "react";
import { useCreateUser } from "../../service/auth/register-user";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const { mutate: regisUser, isSuccess, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "Username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "Password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "Email") {
        setEmail(e.target.value);
      }
    }
  };

  // console.log(Username, "Username")
  // console.log(Password, "Password")
  // console.log(Email, "Email")
  // console.log(isSuccess, "isSucces")
  // console.log(error, "Error")

  if (error) {
    console.log(error.response.data.message, "ini eror bangsat");
  }

  const registerUser = () => {
    regisUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-black to-red-700">
      <div className="flex justify-items-center w-1/2 rounded-3xl backdrop-blur-xl bg-black/40">
        <div className="px-[4rem] py-[5rem] rounded-l-3xl bg-red-700">
            <div className="flex flex-col justify-center content-center my-6">
            <p className="text-white font-semibold text-2xl text-center mb-2 ">Welcome back!</p>
            <p className="text-white font-normal text-center text-base">
            "We're thrilled to have you here again. Please Sign In
            to continue enjoying our movie community and the latest releases."
          </p>
          <a
            href="/"
            className="text-white mt-4 mx-10 border-2 border-white rounded-lg text-center    ">
            Sign in
          </a>
            </div>
          
        </div>
        <div className="flex flex-col px-[4rem] justify-center content-center">
          <p className="text-white font-bold text-2xl text-center">Sign up</p>

          <p className=" text-white  ">Username</p>
          <input
            onChange={handleInput}
            id="Username"
            className="border w-[20rem] h-[2rem] rounded-md mt-1"
            type="text"></input>
          <p className=" text-white  ">Email</p>
          <input
            onChange={handleInput}
            id="Email"
            className="border w-[20rem] h-[2rem] rounded-md mt-1"
            type="email"></input>
          <p className="text-white">Password</p>
          <input
            onChange={handleInput}
            id="Password"
            className="border w-[20rem] h-[2rem] rounded-md mt-1"
            type="password"></input>
          <button
            className="bg-red-600 rounded-lg text-white py-1 mt-4 font-medium"
            onClick={() => registerUser()}>
            {" "}
            Sign up{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
