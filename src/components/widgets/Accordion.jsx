
const Accordion = ({ title, content }) => {


  return (
    <>
      <h4 className='card-title text-primary text-center'>{title}</h4>
      <hr style={{ width: 180, background: '#8497AB' }} />
      <div className="row questions-content-row">
        <div className="col-md-7 mx-auto">
          <div className="accordion" id="accordionOrina">

            {content.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-header" id={`headingOrina${index}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle={`collapseOrina${index}`}
                      data-target={`#collapseOrina${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseOrina${index}`}
                    >
                      {item.subtitle}
                    </button>
                  </h2>
                </div>
                <div
                  id={`collapseOrina${index}`}
                  className="collapse show"
                  aria-labelledby={`headingOrina${index}`}
                  data-parent="#accordionOrina"
                >
                  <div className="card-body text-justify">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div >
    </>
  );
}


export default Accordion;
