import "./addForm.css";
import { useState } from "react";
export default function AddForm(props) {
  const { students, setStudent } = props;
  const [species, setSpecies] = useState("ไม่ระบุ");
  const [name, setName] = useState("");
  const speciesList = ["ชูการ์ไกลเดอร์", "คน", "ดอร์เมาส์", "ไม่ระบุ"];
  const saveStudent = (e) => {
    e.preventDefault(); //ไม่ให้โหลดหน้าใหม่
    if (!name) {
      alert("กรุุณาป้อนข้อมูลด้วยจ้า");
    } else {

      let tempStudents = [...students]
      if(tempStudents.length>0){
        tempStudents.forEach(el => {
            if(!el.species){
                el.species = "ไม่ระบุ"
            }
        });
      }
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        species: species,
      };
      setName("")
      setSpecies("ไม่ระบุ")
      setStudent([...tempStudents, newStudent]);
    }
  };

  return (
    <section className="{container}">
      <form onSubmit={saveStudent}>
        <label>ชื่อนักเรียน</label>
        {/* <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          {speciesList.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <button className="btn-add" type="submit">
          บันทึก
        </button>
      </form>
    </section>
  );
}
