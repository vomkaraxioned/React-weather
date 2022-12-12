import Box from "../weatherDisplay/Box";
import ErrorBox from "./ErrorBox";

const DayList = ({ data, timeSelected }) => {

  const dataLength = data.length - 1;
  let is_match = false;

  return (
    <>
      {
        data.map((obj, i) => {
          const date = obj.dt_txt.split(" ");
          if (date[1] === timeSelected) {
            is_match = true;
            return <Box date={obj.dt_txt} timeStamp={obj.timeStamp} temperature={obj.main.temp} description={obj.weather[0].description} key={i} />;
          } else if (i === dataLength && !is_match) {
            return <ErrorBox title={`Sorry weather for ${date[0]} ${timeSelected} is not updated`} styleName="weather-error" key={i} />;
          }

        })
      }
    </>
  );

};

export default DayList;