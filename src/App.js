import { useState, useEffect } from "react";
import Form from "./components/form/index";
import searchCity from "./actions/search";
import DisplayWeather from "./components/weatherDisplay/index";
import TimeTabs from "./components/TimeTabs/index"
import timeObj from "./objects/timeObj";

const App = () => {

  const [data, setData] = useState(null),
    [time, setTime] = useState("00:00:00");

  const formHandler = (name) => searchCity(name, setData);

  useEffect(() => formHandler("thane"), []);

  return (
    <div className="container">
      <Form handler={formHandler} action="FIXME" name="city-search-form" styleName="search-form" />
      <TimeTabs timeHandler={setTime} timeObj={timeObj} />
      <DisplayWeather data={data} time={time} />
    </div>
  )
}

export default App
