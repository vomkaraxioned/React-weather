import axiosFetcher from "./Axios/axios";
import Form from "./components/form/index";

const App = () => {
  const city = "delhi",
  key = "7151e28e3c61ff6b136098be54f078ea";

  axiosFetcher.get(`?q=${city}&cnt=5&appid=${key}`).then(res=>console.log(res.data)).catch(e=>console.log(e.message));
  
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App
