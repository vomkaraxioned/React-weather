import {useRef} from "react";
import Input from "./Input"

const Form = ({handler})=>{

  const cityName = useRef;

  return(
    <form>
      <div>
        <Input reference={cityName}/>
      </div>
      <div>
        <Input reference={cityName}/>
      </div>
    </form>
  );

};

export default Form;