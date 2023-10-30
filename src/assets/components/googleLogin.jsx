import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ buttonText }) {
  const navigate = useNavigate();
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER2}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      //   localStorage.setItem("token", token);
      CookieStorage.set(CookieKeys.AuthToken, token);
      // navigate("/");

      // Temporary solution

      toast.success(
        "Berhasil login dengan Google!",
        {
          theme: "dark",
        },
        navigate("/home")
      );

      // window.location.href = "/home";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message, {
          theme: "dark",
        });
        return;
      }
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button onClick={() => loginWithGoogle()} className="bg-white rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0 0 48 48">
        <path
          fill="#fbc02d"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path
          fill="#e53935"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path
          fill="#4caf50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path
          fill="#1565c0"
          d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </svg>
      {buttonText}
    </button>
  );
}

export default GoogleLogin;
