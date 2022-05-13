import logo from '../images/logo.svg';
const Footer = () => {
  return (
    <footer className="footer_adalab">
      <p className="footer_awesome">Awesome profile-cards @2022</p>
      <a target="_blank" href="https://adalab.es/" rel="noreferrer">
        <img className="footer_logo" src={logo} alt="Logo Adalab" />
      </a>
    </footer>
  );
};
export default Footer;
