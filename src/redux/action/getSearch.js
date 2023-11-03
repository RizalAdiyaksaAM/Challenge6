
import { reduxGetSearch } from "../../service/get-data-movie-search";
import { setSearchMovie } from "../reducer/movie/GetMovieSearch";


const getDataSearch = (query) => async (dispatch) => {
   return reduxGetSearch(query).then((result) => {
    dispatch(setSearchMovie(result.data.data))
    console.log(result)
  }).catch((err) => 
  console.error(err, "error")
  );
};

export default getDataSearch;