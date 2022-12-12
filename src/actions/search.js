import axiosFetcher from "../Axios/axios";

const searchCity = (cityName, setData) => {

  const key = "7151e28e3c61ff6b136098be54f078ea";

  axiosFetcher.get(`?q=${cityName}&units=metric&appid=${key}`).then(res => setData(res.data)).catch(e => setData(data => "Sorry City Not Found"));
};

export default searchCity;