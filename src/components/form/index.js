import Input from "./Input";
import { useState } from "react";

const Form = ({handler,action,name,style})=>{

  const [cityName,setCityName] = useState();

  const submitHandler = (e)=>{
    e.preventDefault();
    handler(cityName)
  };

  return(
    <form  name={name} className={style} action={action} onSubmit={(e)=>submitHandler(e)}>
      <div>
        <Input type="text"  name="city-name" naming="city-name" cityHandler={setCityName}/>
      </div>
      <div>
        <Input type="submit"  name="submit-btn" naming="btn btn-submit"/>
      </div>
    </form>
  );

};

export default Form;