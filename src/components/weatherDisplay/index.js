import Box from "./Box";
import Title from "./Title";
import LiIterator from "./LiIterator";

const DisplayWeather = (props) => {
  const data = props.weatherData;

  if (data != null && typeof (data) === "object") {
    return (
      <>
        <Title name={data.city.name} />
        <ul>
          <LiIterator data={data.list} />
        </ul>
      </>
    );
  }else {
    if(data != null) {
      return <h2>{data}</h2>
    }else {
      return <h2>loading wait....</h2>
    }
  }
};

export default DisplayWeather;