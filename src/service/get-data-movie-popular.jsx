import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoints";
import { fetchDataMovie } from "./get-data-movie";
import http3 from "../utils/http3";

const fetchDataMoviePopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useMovieDataPopularQuery = (options) => {
  
  return useQuery([API_ENDPOINT.BINAR_POPULAR, options], fetchDataMovie);
};
// const useMovieDataPopularQuery = (options) => {
//   return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie);
// };
export { fetchDataMoviePopular, useMovieDataPopularQuery };
