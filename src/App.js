import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/addForm";
import "./App.css"
function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "มู่" },
    { id: 2, name: "ไวส์" },
    { id: 3, name: "ชูการ์" },
    { id: 4, name: "เบ้บบี้" },
  ]);

  const deleteStudent = (id) => {
    setStudent(students.filter((e) => e.id !== id));
  };

  const setNew = [
    { id: 1, name: "มู่" },
    { id: 2, name: "ไวส์" },
    { id: 3, name: "ชูการ์" },
    { id: 4, name: "เบ้บบี้" },
  ]

  const resetData =()=>{
    setStudent(setNew);
  }

  
  return (
    <div className="container">
      <Header title="โรงเรียนของเราน่าอยู่"/>
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} resetData={resetData}/>
      </main>
    </div>
  );
}

export default App;
