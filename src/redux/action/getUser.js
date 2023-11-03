import { reduxGetUser } from "../../service/auth/get-user";

import { setUser } from "../reducer/auth/LoginUser";

const getUser = () => async (dispatch) => {
   return reduxGetUser().then((result) => {
    dispatch(setUser(result.data.data))
    console.log(result)
  }).catch((err) => 
  console.error(err, "error")
  );
};

export default getUser;