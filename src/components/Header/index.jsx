import "./Header.css";

const Header = ({ title = "" }) => {
  return (
    <header className="header">
      <h3>{title}</h3>
    </header>
  );
};

export default Header;
