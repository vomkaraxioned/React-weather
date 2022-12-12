import TimeTab from "./TimeTab";
import { useRef } from "react";

const TimeTabs = ({ timeHandler, timeObj }) => {

  const ulReference = useRef();

  const clickHandler = (e) => {
    const tabs = ulReference.current,
      tabLength = tabs.children.length;
    let i = 0;
    if (e.target !== ulReference.current) {
      while (i < tabLength) {
        if (tabs.children[i].classList.contains("active")) {
          tabs.children[i].classList.remove("active");
        }
        i++;
      }
      e.target.classList.add("active")
      timeHandler(state => state = e.target.dataset.time)
    }
  };

  return (
    <ul className="time-selector" onClick={clickHandler} ref={ulReference}>
      {
        timeObj.map(({ time, value }, i) => {
          if (i == 0) {
            return <TimeTab time={time} value={value} key={value} styleName="active" />
          } else {
            return <TimeTab time={time} value={value} key={value} />
          }
        })
      }
    </ul>
  );
};

export default TimeTabs;