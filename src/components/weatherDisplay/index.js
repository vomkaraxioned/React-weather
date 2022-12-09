import Box from "./Box";
import Title from "./Title";
import LiIterator from "./LiIterator";

const DisplayWeather = (props) => {
  const data = props.weatherData;
  if (data != null) {
    return (
      <>
        <Title name={data.city.name} />
        <ul>
            <LiIterator data={data.list}/>
        </ul>
      </>
    );
  }
};

export default DisplayWeather;