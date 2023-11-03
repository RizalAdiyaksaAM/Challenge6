import { reduxGetDetail } from "../../service/get-data-movie-detail";
import { setDetailMovie } from "../reducer/movie/GetMovieDetail";

const getDataDetail = (movieId) => (dispatch) => {
  reduxGetDetail(movieId).then((result) => {
    dispatch(setDetailMovie(result.data.data))
    console.log(result)
  }).catch((err) => 
  console.error(err, "error")
  );
};

export default getDataDetail;
