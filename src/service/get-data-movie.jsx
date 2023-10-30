import { useQuery } from "@tanstack/react-query";
import http3 from "../utils/http3";
import { API_ENDPOINT } from "../utils/api-endpoints";

const fetchDataMovie = async ({ queryKey }) => {

  const [_key, _params] = queryKey;
  const { data } = await http3.get(_key, { params: _params });
  return data;
};

const useMovieDataQuery = (options) => {
  return useQuery([API_ENDPOINT.BINAR_POPULAR, options], fetchDataMovie);
};
// const useMovieDataQuery = (options) => {
//   return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie);
// };
export { fetchDataMovie, useMovieDataQuery };
