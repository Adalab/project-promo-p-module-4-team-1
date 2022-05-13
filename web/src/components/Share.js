const Share = (props) => {
  const handleChangeClickCreate = (ev) => {
    ev.preventDefault();
    props.handleClickCreate();
  };

  return (
    <fieldset className="form">
      <legend
        id="id-share"
        onClick={props.handleChangeCollapse}
        className={`form__legend js__share ${props.rotateShare}`}
      >
        <div className="form__legend__1">
          <i className="fa-solid fa-share-nodes form__legend__icon1"></i>
          <span className="form__legend__text">COMPARTE</span>
        </div>
        <i className="fa-solid fa-angle-down form__legend__icon2"></i>
      </legend>

      <div className={`js__contextshare ${props.collapseShare}`}>
        <div className="form__contextcreate">
          <button
            onClick={handleChangeClickCreate}
            className="button_create js_create_button"
          >
            <i className="fa-solid fa-address-card"></i>
            <span className="btn_tex js-submitSpan">Crear tarjeta</span>
          </button>
        </div>
        <div className="error_create js__error"></div>

        <div>
          <label className="card__new js__createcard" htmlFor="tarjeta creada">
            La tarjeta ha sido creada:
            <a href={`{props.apiUrl.cardURL`}>
              {props.apiUrl.cardURL || ' url'}
            </a>
          </label>
          <div>
            <a className="card__share js-response" target="_blank">
              {' '}
            </a>
          </div>

          <div className="button_share js_twitterShare">
            <a href="" target="_blank">
              <i className="fa-brands fa-twitter"></i>
              Compartir en twitter
            </a>
          </div>
        </div>
      </div>
    </fieldset>
  );
};
export default Share;
