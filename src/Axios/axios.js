import axios from "axios";

const axiosFetcher = axios.create({
  baseURL:"https://api.openweathermap.org/data/2.5/forecast"
});

export default axiosFetcher;