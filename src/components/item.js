export default function Item(props) {
    const {dataList,deleteStudent} = props
    
  return (
    <>
      <li key={dataList.id} style={{color :dataList.species =='ไม่ระบุ'? 'red':'green'}} >
        <span>
          รหัส  {dataList.id} : ชื่อ  {dataList.name} สายพันธ์ : {dataList.species ? dataList.species : "ไม่ระบุ"}  
        </span>
        <span>
          <button className="delBtn" onClick={() => deleteStudent(dataList.id)}>
            ลบ!
          </button>
        </span>
      </li>
    </>
  );
}
