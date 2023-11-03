import { CookieKeys, CookieStorage } from "../../utils/cookie";
import { setIsLoggedIn, setToken } from "../reducer/auth/LoginUser";
import { reduxLoginUser } from "../../service/auth/login-user";

export const loginUser = (input) => async (dispatch) => {
  return reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      return result;
    })
    .catch((err) => {
      console.error(err, "err"); 
    });
};

export default loginUser;
