import Footer from './Footer';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bodyIndex">
      <main className="main">
        <div className="main__container">
          <img
            className="main__container--image"
            src={Logo}
            alt="Logo Awesome Profile Cards"
          />
          <h1 className="main__container--title">Crea tu tarjeta de visita</h1>
          <p className="main__container--description">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>

          <div className="main__container--icons">
            <div className="icon__font">
              <i className="fa-regular fa__icon fa-object-ungroup"></i>
              <span className="icons__title">Diseña</span>
            </div>
            <div className="icon__font">
              <i className="fa-regular fa__icon fa-keyboard"></i>
              <span className="icons__title">Rellena</span>
            </div>
            <div className="icon__font">
              <i className="fa-solid fa__icon fa-share-nodes"></i>
              <span className="icons__title">Comparte</span>
            </div>
          </div>
        </div>

        <button className="main__btn">
          <Link to={'/card'}>Comenzar</Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
