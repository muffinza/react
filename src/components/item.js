export default function Item(props) {
    const {dataList,deleteStudent} = props
  return (
    <>
      <li key={dataList.id}>
        <span>
          ID : {dataList.id} - Name : {dataList.name}
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
