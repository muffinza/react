import { useState } from "react";
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
      <h2>จำนวนนักเรียน {students.length}</h2>
      <button onClick={()=>setShow(!show)}>สลับ </button>
      <ul>
        {show && students.map((e) => (
          <li key={e.id}>
            <p>
              ID : {e.id} - Name : {e.name}
            </p>
            <button onClick={() => deleteStudent(e.id)}>delete!</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;
