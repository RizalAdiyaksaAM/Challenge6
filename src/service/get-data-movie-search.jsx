import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoints";
import http3 from "../utils/http3";

const fetchDataMovieSearch = async (namemovie) => {
  const { data } = await http3.get(API_ENDPOINT.BINAR_SEARCH, {
    params: {
      include_adult: true,
      // language: "en-US",
      page: 1,
      query: namemovie,
    },
  });
  return data;
};

const useMovieDataSearchQuery = (namemovie) => {
  return useQuery(["userDataMovieSearch", namemovie], () => fetchDataMovieSearch(namemovie));
};
export { fetchDataMovieSearch, useMovieDataSearchQuery };
