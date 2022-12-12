import TimeTab from "./TimeTab";
import { useRef } from "react";

const TimeTabs = ({ timeHandler, timeObj }) => {

  const ulReference = useRef();

  const clickHandler = (e) => {
    if (e.target != ulReference.current) {
      timeHandler(state => state = e.target.dataset.time)
    }
  };

  return (
    <ul className="time-selector" onClick={clickHandler} ref={ulReference}>
      {
        timeObj.map(({ time, value }, i) => <TimeTab time={time} value={value} key={value} />)
      }
    </ul>
  );
};

export default TimeTabs;