import { useState } from "react";
import { useLoginUser } from "../../utils/auth/LoginUser";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../assets/components/googleLogin";



import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const LoginPage = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const { mutate: logUser, isSuccess, error, data } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "Password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "Email") {
        setEmail(e.target.value);
      }
      console.log(e.target.value);
    }
  };

  if (error) {
    console.log(error.response.data.message, "ini eror");
  }

  const loginUser = () => {
    logUser({
      email: Email,
      password: Password,
    });
  };

  useEffect(() => {
    if (data?.data.data.token) {
      toast.success("Anda berhasil login", {
        theme: "dark",
      });
      navigate("/home");
    }
  }, [data]);

  return (
    <div className="w-screen h-screen relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-black to-red-700">
      
      <div className="w-screen h-screen  flex justify-center items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-black via-black to-red-700">
      <div className="flex justify-items-center w-1/2 rounded-3xl backdrop-blur-xl bg-black/40 ">
        <div  className=" px-[4rem] py-[5rem] rounded-l-3xl bg-red-700 "   >
          <div className=" flex flex-col justify-center content-center ">
          <p className="text-white font-semibold text-2xl text-center mb-2 ">New here?</p>
          

          <p className="text-white font-normal text-center text-base  "> "Register for free to enjoy the latest movie releases, access a vast library of classic films, and connect with fellow movie enthusiasts in our vibrant community."</p>
          <a href="/Register" className="text-white mt-4 mx-10 border-2 border-white rounded-lg text-center    ">
            Sign up
          </a>
          </div>
        </div>
        <div className=" flex flex-col px-[4rem] justify-center content-center">
          <p className="text-white font-bold text-2xl text-center">
            Sign in to account
          </p>
          <div className="bg-white mx-[9rem] mt-[1rem] py-[1px]"></div>
          <div className="flex justify-center content-center items-center space-x-4  mt-5">
            <button className="flex justify-center content-center items-center">
              <GoogleLogin buttonText="" />
            </button>
            <button className="bg-white rounded-full">  
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 48 48">
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>{" "}
            </button>
          </div>
          <p className="text-white text-center my-4 text-xs font-light">or use your email account</p>
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
            className="border w-[20rem] h-[2rem]  rounded-md mt-1"
            type="password"></input>

          <button
            className="bg-red-600 rounded-lg text-white py-1 mt-4 font-medium "
            onClick={() => loginUser()}>
            Sign in
          </button>
          
        </div>
        <div></div>
      </div>
    </div>
    </div>
    
  );
};
