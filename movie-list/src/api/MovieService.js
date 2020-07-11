//test
import axios from "axios";
import Settings from "./../config/Settings";
const getDetails = (id) => {
  const { API_URL, API_KEY } = Settings;
  //https://api.themoviedb.org/3/search/movie?api_key=0a230986d7a69ed8de47758928c71e01&query=Terminator
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Terminator
  const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;

  return axios.get(url);
};
export default getDetails;
