import { useState } from "react";
import "./studentList.css"
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
  const [show,setShow]=useState(true)
  return (
    <>
      <h2>มีจำนวนนักเรียน {students.length}</h2>
      <button onClick={()=>setShow(!show)}>สลับ </button>
      <ul>
        {show && students.map((e) => (
          <li key={e.id}>
            <span>
              ID : {e.id} - Name : {e.name}
            </span>
            <span>
            <button onClick={() => deleteStudent(e.id)}>delete!</button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;
