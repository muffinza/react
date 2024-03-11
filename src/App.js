import { useState } from "react";
function App() {
  const name = "muhlan";
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  const subtract =()=>{
    setCount(count - 1);
  }
  
  return (
    <div>
      <h1>สวัสดี {name}</h1>
      <h1> {count} </h1>
      {/* <button onClick={() => alert("สวัสดี mu")}>คลิก</button> <br /> */}
      <button onClick={() => counter()}>บวก</button>
      <button onClick={() => subtract()}>ลบ</button>
      <button onClick={() => setCount(0)}>รีเซ็ต</button>
    </div>
  );
}

export default App;
