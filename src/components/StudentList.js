import { useState } from "react";
import "./studentList.css";
import Item from "./item";
function StudentList(props) {
  const {students,deleteStudent,resetData} = props
  const [show, setShow] = useState(true);
  const btnStyle={
    background : show ? "rgb(224, 150, 208)":"rgb(202, 182, 202)",
    fontSize: "16px"
  }
  return (
    <div>
      <div className="label">
        <div>
         <h4 style={{color:"purple"}}>มีจำนวนนักเรียน {students.length}</h4>
        </div>
        <div>
        <button onClick={() => setShow(!show)} style={btnStyle}>{show?"เเสดง":"ซ่อน"} </button>
        <button onClick={() => resetData()} style={btnStyle}>รีเซ็ท </button>
        </div>
      </div>
      <ul>
        {show && 
          students.map((e) => (
            <Item key={e.id} dataList={e} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </div>
  );
}

export default StudentList;
