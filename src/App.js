import { useState } from "react";
function App() {
  return (
    <>
      <h1>State</h1>
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

export default App;
