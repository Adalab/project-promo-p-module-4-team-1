import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
        <img
          className="header_img"
          src={logo}
          alt="Logo Awesome Profile Cards"
        />
      </Link>
    </header>
  );
};
export default Header;
