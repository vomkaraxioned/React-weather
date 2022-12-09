import { useState, useEffect } from "react";
import Form from "./components/form/index";
import searchCity from "./actions/search";
import DisplayWeather from "./components/weatherDisplay/index";

const App = () => {

  const [data,setData] = useState(null);

  const formHandler = (name)=>searchCity(name,setData);

  useEffect(()=>formHandler("thane"),[]);

  return ( 
    <div className="container">
      <Form handler={formHandler} action="FIXME" name="city-search-form" styleName="search-form" />
      <DisplayWeather weatherData={data}/>
    </div>
  )
}

export default App
