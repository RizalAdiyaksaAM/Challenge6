
import { reduxGetMovie } from "../../service/get-data-movie";
import { setMovie } from "../reducer/movie/GetMoviePopular";


 const getDataPopular = () => async (dispatch) => {
    return reduxGetMovie()
     .then((result) => {
        dispatch(setMovie(result.data.data))
        return result.data.data;
     })
     .catch((err) => {
        console.error(err, "error");
     })

}

export default getDataPopular;