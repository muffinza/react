import { useState } from "react";
import "./studentList.css";
function StudentList() {
  const [students, setStudent] = useState([
    { id: 1, name: "mu" },
    { id: 2, name: "wise" },
    { id: 3, name: "sugar" },
    { id: 4, name: "bebebie" },
  ]);
  const deleteStudent = (id) => {
    setStudent(students.filter((e) => e.id !== id));
  };
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
        </div>
      </div>
      <ul>
        {show &&
          students.map((e) => (
            <li key={e.id}>
              <span>
                ID : {e.id} - Name : {e.name}
              </span>
              <span>
                <button className="delBtn" onClick={() => deleteStudent(e.id)}>
                  ลบ!
                </button>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default StudentList;
