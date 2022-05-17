import GetAvatar from './GetAvatar';

const Fill = (props) => {
  return (
    <fieldset className="form">
      <legend
        id="id-fill"
        onClick={props.handleChangeCollapse}
        className={`form__legend js__fill ${props.rotateFill}`}
      >
        <div className="form__legend__1">
          <i className="fa-regular fa-keyboard form__legend__icon1"></i>
          <span className="form__legend__text">RELLENA</span>
        </div>
        <i className="fa-solid fa-angle-down form__legend__icon2"></i>
      </legend>

      <div className={`js__form js__allInputs ${props.collapseFill}`}>
        <div className="form__items">
          <label htmlFor="Nombre Completo">Nombre completo</label>
          <input
            className="form__items__box js__profile-name"
            placeholder="Ej: Sally Jill"
            type="text"
            name="name"
            id="Nombre completo"
            value={props.dataForm.name}
            onChange={props.handleChangeOriginal}
          />
        </div>
        <div className="form__items">
          <label htmlFor="Puesto">Puesto</label>
          <input
            className="form__items__box js__profile-job"
            placeholder="Ej: Front-end unicorn"
            type="text"
            name="job"
            id="Puesto"
            value={props.dataForm.job}
            onChange={props.handleChangeOriginal}
          />
        </div>
        <div className="form__items">
          <label htmlFor="title">Imagen de perfil</label>
          <div className="form__items-image">
            <div className="action">
            <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />

              {/* <label className="action__upload-btn" htmlFor="img-selector">
                Añadir imagen
              </label>
              <input
                type="file"
                name=""
                id="img-selector"
                className="action__hiddenField js__profile-upload-btn"
              />*/}
            </div>
            
            {/* <div className="profile">
              <div className="profile__image js__profile-image"></div>
            </div>  */}
          </div>
        </div>
        <div className="form__items">
          <label htmlFor="Email">Email</label>
          <input
            className="form__items__box js__profile-email"
            placeholder="Ej: salyy-hill@gmail.com"
            type="email"
            name="email"
            id="email"
            value={props.dataForm.email}
            onChange={props.handleChangeOriginal}
          />
        </div>
        <div className="form__items">
          <label htmlFor="Teléfono">Teléfono</label>
          <input
            className="form__items__box js__profile-phone"
            placeholder="Ej: 55-55-55-55"
            type="tel"
            name="phone"
            id="tel"
            value={props.dataForm.phone}
            onChange={props.handleChangeOriginal}
          />
        </div>
        <div className="form__items">
          <label htmlFor="Linkedin">Linkedin</label>
          <input
            className="form__items__box js__profile-linkedin"
            placeholder="Ej: sally.hill"
            type="text"
            name="linkedin"
            id="Linkedin"
            value={props.dataForm.linkedin}
            onChange={props.handleChangeOriginal}
          />
        </div>
        <div className="form__items">
          <label htmlFor="Github">Github</label>
          <input
            className="form__items__box js__profile-github"
            placeholder="Ej: sally-hill"
            type="text"
            name="github"
            id="Github"
            value={props.dataForm.github}
            onChange={props.handleChangeOriginal}
          />
        </div>
      </div>
    </fieldset>
  );
};
export default Fill;
