import { API_ENDPOINT } from "../utils/api-endpoints"
import http3 from "../utils/http3"



export const reduxGetDetail = async (movieId) => {
    return await http3.get(API_ENDPOINT.BINAR_DETAIL(movieId));
  }
  
  