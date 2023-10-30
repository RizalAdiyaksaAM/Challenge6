import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../api-endpoints";
import http3 from "../http3";
import { useNavigate } from "react-router-dom";

const RegisterUser = async (input) => {
    const { data } = await http3.post(API_ENDPOINT.REGISTER_USER, input);
    return data;
  };

    
  const useCreateUser = () => {
    
    const navigate = useNavigate();

    return useMutation(RegisterUser, {onSuccess: () => {
        navigate('/Login')
    },
});
  };

  export default useCreateUser;