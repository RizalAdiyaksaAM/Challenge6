export const API_ENDPOINT = {
    // NOW_PLAYING: `3/movie/now_playing?`,
    // NOW_POPULAR: `3/movie/popular?`,
    // NOW_SEARCH: `3/search/movie?`,
    // NOW_DETAIL: `3/movie`,
    REGISTER_USER : "/api/v1/auth/register",
    LOGIN_USER : "/api/v1/auth/login",
    LOGIN_GOOGLE: "/v1/auth/google",
    BINAR_POPULAR : "/api/v1/movie/popular",
    BINAR_DETAIL :(id)=> `/api/v1/movie/${id}`,
    BINAR_SEARCH : "/api/v1/search/movie?"
    
  };
  