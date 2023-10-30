import React from 'react'
import { API_ENDPOINT } from '../api-endpoints'
import { CookieKeys, CookieStorage } from '../cookie'
import http3 from '../http3';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginUser = async (input) => {
    try {
      const result = await http3.post(API_ENDPOINT.LOGIN_USER, input);
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      console.log (result, "Result")
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  

const useLoginUser = () => {
    
    const navigate = useNavigate(); 

    return useMutation(LoginUser);
};

export {useLoginUser};

// , {onSuccess: () => {
//   toast.success("Anda berhasil login");  
//   navigate('/')
// },
// }