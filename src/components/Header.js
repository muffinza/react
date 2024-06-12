import "./header.css"
const Header = ({title}) => {
  return (
    <nav>
      <div>
      <img src={'https://img.icons8.com/?size=100&id=42810&format=png&color=000000'}  alt="logo" />
      <p>{title}</p>
      </div>
      <div>
      <a href="/">หน้าเเรก</a>
      </div>
     
    </nav>
  );
};

export default Header;
