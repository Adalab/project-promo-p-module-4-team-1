import '../styles/CardPreview.scss';

const CardPreview = (props) => {
  return (
    <article className="container__cards">
      <div className="card__text">
        <h2 className="cards__name js__preview_name">
          {props.data.name || 'Nombre Apellido'}
        </h2>
        <p className="cards__job js__preview_job">
          {props.data.job || 'Frontend Developer'}
        </p>
        <div className="rectangle"></div>
      </div>

      <div className="cards__img js__profile-preview"></div>

      <div className="cards__logos">
        <a
          className="cards__logos--redes js__preview_phone"
          href={`tel:${props.data.phone}`}
        >
          <i className="fa-solid fa-mobile-screen-button links"></i>
        </a>
        <a
          className="cards__logos--redes js__preview_email"
          href={`mailto:${props.data.email}`}
        >
          <i className="fa-regular fa-envelope links"></i>
        </a>
        <a
          className="cards__logos--redes js__preview_linkedin"
          href={props.data.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in links"></i>
        </a>
        <a
          className="cards__logos--redes js__preview_github"
          href={props.data.github}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github-alt links"></i>
        </a>
      </div>
    </article>
  );
};
export default CardPreview;
