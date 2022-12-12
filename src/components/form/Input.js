import { useRef } from 'react';


const Input = ({ type, name, naming, cityHandler }) => {

  const value = useRef();

  if (cityHandler != null) {
    return <input type={type} name={name} className={naming} ref={value} onChange={() => cityHandler(state => value.current.value)} />
  } else {
    return <input type={type} name={name} className={naming} ref={value} />
  }
};

export default Input;
