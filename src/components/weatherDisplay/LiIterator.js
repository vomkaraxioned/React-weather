
import DayList from "./DayList";

const LiIterator = ({data})=>{
  let  arr = [],list=[],prevDate,i=1,compo;

  data.map((obj) => {
    const currentDate = new Date(obj.dt_txt.split(" ")[0]).getDate();
    prevDate = (prevDate == "")?currentDate:prevDate;

    if(prevDate == currentDate) {
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
      list.map(obj=>{})

    }
    </>
  );
};

export default LiIterator;