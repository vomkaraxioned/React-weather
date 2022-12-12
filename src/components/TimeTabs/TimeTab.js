const TimeTab = ({time,value,styleName})=>{
  return <li data-time={value} className={styleName}>{time}</li>
};

export default TimeTab;