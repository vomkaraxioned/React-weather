
import DayList from "./DayList";

const LiIterator = ({data})=>{
  let  arr = [],list=[],prevDate = null;

  data.forEach((obj) => {
    const date = obj.dt_txt.split(" ")[0],
    currentDate = new Date(date).getDate();
    prevDate = (prevDate === null)?currentDate:prevDate;
    obj.dt_txt = date;
    if(prevDate === currentDate ) {
      arr.push(obj);
    }else{
      list.push(arr);
      arr=[];
      arr.push(obj);
      prevDate = currentDate;
    }

  });

  return (
    <>
    {
      list.map((obj,i)=> <li key={i}><DayList weatherList={obj}/></li>)

    }
    </>
  );
};

export default LiIterator;