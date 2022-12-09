const Box = ({date,temperature,description}) => {
  return (
    <li>
      <span className="weather__date-stamp">{date}</span>
      <span className="weather__temperature">{temperature}</span>
      <span className="weather__description">{description}</span>
    </li>
  );
};

export default Box;