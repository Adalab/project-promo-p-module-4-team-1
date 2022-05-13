import logo from '../images/logo.svg';
const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img
          className="header_img"
          src={logo}
          alt="Logo Awesome Profile Cards"
        />
      </a>
    </header>
  );
};
export default Header;
