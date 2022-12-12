const Box = ({ date, timeStamp, temperature, description }) => {
  return (
    <div className="weather">
      <span className="weather__date-stamp">{date}</span>
      <span className="weather__time-stamp">{timeStamp}</span>
      <span className="weather__temperature">{temperature}&deg;c</span>
      <span className="weather__description">{description}</span>
    </div>
  );
};

export default Box;