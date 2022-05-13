const Design = (props) => {
  return (
    <fieldset className="form">
      <legend
        id="id-design"
        onClick={props.handleChangeCollapse}
        className={`form__legend js__legend ${props.rotateDesign}`}
      >
        <div className="form__legend__1">
          <i className="fa-regular fa-object-ungroup form__legend__icon1"></i>
          <span className="form__legend__text">DISEÑA</span>
        </div>
        <i className="fa-solid fa-angle-down form__legend__icon2"></i>
      </legend>

      <div className={`form__content js__context ${props.collapseDesign}`}>
        <div className="form__label">
          <label htmlFor="palette">COLORES</label>
        </div>

        <div className="js__formradios">
          <div className="form__radios">
            <input
              className="form__radio js_radio-1"
              type="radio"
              name="palette"
              value="1"
              checked={props.dataForm.palette === '1'}
              onChange={props.handleChangeOriginal}
            />
            <div className="form__values">
              <div className="form__color form__color--1"></div>
              <div className="form__color form__color--2"></div>
              <div className="form__color form__color--3"></div>
            </div>
          </div>

          <div className="form__radios">
            <input
              className="form__radio js_radio-2"
              type="radio"
              name="palette"
              value="2"
              checked={props.dataForm.palette === '2'}
              onChange={props.handleChangeOriginal}
            />
            <div className="form__values">
              <div className="form__color form__color--4"></div>
              <div className="form__color form__color--5"></div>
              <div className="form__color form__color--6"></div>
            </div>
          </div>

          <div className="form__radios">
            <input
              className="form__radio js_radio-3"
              type="radio"
              name="palette"
              value="3"
              checked={props.dataForm.palette === '3'}
              onChange={props.handleChangeOriginal}
            />
            <div className="form__values">
              <div className="form__color form__color--7"></div>
              <div className="form__color form__color--8"></div>
              <div className="form__color form__color--9"></div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};
export default Design;
