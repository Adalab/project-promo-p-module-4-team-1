import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Card = (props) => {
  // console.log('PROPS: ', props);
  const handleChangeReset = (ev) => {
    ev.preventDefault();
    props.handleReset();
  };

  const handleChangeCollapse = (ev) => {
    ev.preventDefault();
    const legendId = ev.currentTarget.id;
    props.handleCollapse(legendId);
  };

  const handleChangeOriginal = (ev) => {
    const inputValueOriginal = ev.target.value;
    const inputNameOriginal = ev.target.name;
    props.handleChange(inputValueOriginal, inputNameOriginal);
  };

  return (
    <>
      {/* COMPONENTE */}
      <Header />

      <main className="main2">
        <section className={`preview palette-${props.dataForm.palette}`}>
          <div>
            <button
              className="preview__reset js__btnreset"
              type="button"
              onClick={handleChangeReset}
            >
              <i className="fa-regular fa-trash-can"></i>
              <span className="cards__reset--text">Reset</span>
            </button>
            {/* COMPONENTE */}
            <CardPreview data={props.dataForm} />
          </div>
        </section>

        <form className="main2__form js__resetform js-formshare" action="#">
          {/* COMPONENTE */}
          <Design
            handleChangeCollapse={handleChangeCollapse}
            handleChangeOriginal={handleChangeOriginal}
            dataForm={props.dataForm}
            collapseDesign={props.collapseDesign}
            rotateDesign={props.rotateDesign}
          />
          {/* COMPONENTE */}
          <Fill
            handleChangeCollapse={handleChangeCollapse}
            handleChangeOriginal={handleChangeOriginal}
            dataForm={props.dataForm}
            collapseFill={props.collapseFill}
            rotateFill={props.rotateFill}
          />

          {/* COMPONENTE */}
          <Share
            handleChangeCollapse={handleChangeCollapse}
            handleClickCreate={props.handleClickCreate}
            apiUrl={props.apiUrl}
            collapseShare={props.collapseShare}
            rotateShare={props.rotateShare}
          />
        </form>
      </main>

      {/* COMPONENTE */}
      <Footer />
    </>
  );
};

export default Card;
