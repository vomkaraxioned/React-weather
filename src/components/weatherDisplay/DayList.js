import Box from "../weatherDisplay/Box";

const DayList = (props) => {
  const data = props.weatherList;

  return (
    <ul>
      {
        data.map((obj, i) => <Box date={obj.dt_txt} timeStamp={obj.timeStamp} temperature={obj.main.temp} description={obj.weather[0].description} key={i} />)
      }
    </ul>
  );

};

export default DayList;