import Title from "./Title";
import LiIterator from "./LiIterator";

const DisplayWeather = ({ data, time }) => {

  if (data != null && typeof (data) === "object") {
    return (
      <div className="wrapper">
        <Title name={data.city.name} />
        <ul className="weather-details">
          <LiIterator data={data.list} time={time} />
        </ul>
      </div>
    );
  } else {
    if (data != null) {
      return <div className="wrapper"><h2 className="error">{data}</h2></div>
    } else {
      return <div><h2 className="error">loading wait....</h2></div>
    }
  }
};

export default DisplayWeather;