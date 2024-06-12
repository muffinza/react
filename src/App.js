import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import "./App.css"
function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "mu" },
    { id: 2, name: "wise" },
    { id: 3, name: "sugar" },
    { id: 4, name: "bebebie" },
  ]);

  const deleteStudent = (id) => {
    setStudent(students.filter((e) => e.id !== id));
  };

  const setNew = [
    { id: 1, name: "mu" },
    { id: 2, name: "wise" },
    { id: 3, name: "sugar" },
    { id: 4, name: "bebebie" },
  ]

  const resetData =()=>{
    setStudent(setNew);
  }

  
  return (
    <div className="container">
      <Header title="โรงเรียนของเราน่าอยู่"/>
      <main>
        <StudentList students={students} deleteStudent={deleteStudent} resetData={resetData}/>
      </main>
      
    </div>
  );
}

export default App;
