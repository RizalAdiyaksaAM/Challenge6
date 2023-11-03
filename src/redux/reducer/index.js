import { combineReducers } from "redux";
import LoginUser from "../../redux/reducer/auth/LoginUser";
import GetMoviePopular from "./movie/GetMoviePopular";
import GetMovieDetail from "./movie/GetMovieDetail";

export default combineReducers ({
    auth: LoginUser,
    movie : GetMoviePopular,
    movieDetail : GetMovieDetail
})