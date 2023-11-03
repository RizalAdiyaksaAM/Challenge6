import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { useDispatch, useSelector } from "react-redux";
import getUser from "../../redux/action/getUser";

export const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    function handleSubmit(e) {
      e.preventDefault();
      navigate(`/${search}`);
    }
  
    const handleLogout = () => {
      CookieStorage.remove(CookieKeys.AuthToken, {
        path:"/",
        expires:new Date(0)
      });
  
      navigate("/")
    }

    const dataUser = () => {
      dispatch (getUser())
    }
     
    const dataUserMovie = useSelector((state) => state.auth.user);

    console.log(dataUserMovie.name,"user")

    useEffect(() => {
     dataUser();
    }, [])
    

  return (
    <div className="relative  items-center  bg-transparent z-10 ">
      <div className="fixed flex justify-around items-center w-full mt-6 bg-transparent z-5">
        <a href="/home" className="font-bold text-4xl text-red-600">MovieList</a>
        <form className="flex gap-2 items-center border-2 rounded-full border-red-600" onSubmit={handleSubmit}>
          <input
            className="w-[25rem] h-[2rem] rounded-[2rem] py-2 pl-9 pr-3 bg-transparent border-none focus:outline-none focus:text-white"
            placeholder="What do you want to match?"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          ></input>
          <button type="submit" className="" >
          <svg
            className="w-[1rem] h-[2rem] mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          </button>
          
        </form>
        <div className="space-x-8 flex flex-row justify-center content-center items-center ">
        <div className=" flex items-center justify-center px-[1.5rem] py-[0.5rem] gap-2 rounded-xl backdrop-blur-sm bg-white/30 text-white font-semibold ">
          <svg className="fill-red-600 " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style></style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            <p className="text-white">{dataUserMovie.name}</p>
          </div>
          <button onClick={handleLogout} className="px-[2.5rem] py-[0.5rem] rounded-xl bg-red-600 text-white font-semibold">
              Logout
          </button>
        </div>
      </div>
    </div>
  );
};
