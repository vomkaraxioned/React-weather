const Box = ({date,temperature,description}) => {
  return (
    <li className="weather">
      <span className="weather__date-stamp">{date}</span>
      <span className="weather__temperature">{temperature}&deg;c</span>
      <span className="weather__description">{description}</span>
    </li>
  );
};

export default Box;