
import DayList from "./DayList";

const LiIterator = ({ data, time }) => {
  let arr = [], list = [], prevDate = null;

  data.forEach((obj) => {
    const date = obj.dt_txt.split(" ")[0],
      currentDate = new Date(date).getDate();
    prevDate = (prevDate === null) ? currentDate : prevDate;


    if (prevDate === currentDate) {
      arr.push(obj);
    } else {
      list.push(arr);
      arr = [];
      arr.push(obj);
      prevDate = currentDate;
    }

  });

  return (
    <>
      {
        list.map((obj, i) => {
          return <li key={i}><DayList data={obj} timeSelected={time} /></li>
        })
      }
    </>
  );
};

export default LiIterator;