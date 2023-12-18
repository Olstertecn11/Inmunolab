
import { useNavigate, Link } from 'react-router-dom';
import './styles/Questions.css';

const Questions = () => {
  const history = useNavigate();
  return (
    <div>
      <div className="row questions-row">
        <img src="https://dfb.epn.edu.ec/images/Noticias/faqs2.jpg" className='img-q' />
      </div>

      <h4 className='card-title text-primary text-center'>Exámenes de Orina</h4>
      <hr style={{ width: 180, background: '#8497AB' }} />
      <div className="row questions-content-row">
        <div className="col-md-7 mx-auto">
          <div className="accordion" id="accordionOrina">
            <div className="card">
              <div className="card-header" id="headingOrinaOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaOne"
                    aria-expanded="true"
                    aria-controls="collapseOrinaOne"
                  >
                    Exámen de Orina
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaOne"
                className="collapse show"
                aria-labelledby="headingOrinaOne"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify">
                  Se recomienda que sea la primera orina de la mañana, si en dado caso no es posible, dejar transcurrir dos horas sin haber tomado líquido y sin ir al sanitario, posteriormente tomar la muestra en un recipiente esterilizado y limpio. Tomar en cuenta que el tiempo máximo desde la recolección de la muestra para ser analizada en el laboratorio son 2Hrs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingOrinaTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaTwo"
                    aria-expanded="false"
                    aria-controls="collapseOrinaTwo"
                  >
                    Urocultivo
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaTwo"
                className="collapse"
                aria-labelledby="headingOrinaTwo"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify">
                  Antes de tomar la muestra se debe de realizar la limpieza adecuada en el área genital con jabón y abundante agua. Se recomienda que sea la primera orina de la mañana, emitir un poco de muestra fuera del recipiente y el resto colocarlo en el frasco esterilizado y limpio. Si en dado caso no es posible la primera orina de la mañana, dejar transcurrir dos horas sin haber tomado líquido y sin ir al sanitario, posteriormente tomar la muestra en un recipiente esterilizado y limpio. Tomar en cuenta que el tiempo máximo desde la recolección de la muestra para ser analizada en el laboratorio son 2Hrs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingOrinaThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaThree"
                    aria-expanded="false"
                    aria-controls="collapseOrinaThree"
                  >
                    Exámen de Orina 24 horas
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaThree"
                className="collapse"
                aria-labelledby="headingOrinaThree"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify">
                  Se necesita una muestra de orina de 24 horas, recolectarla en un recipiente de plástico estéril para orina de 24 horas (solicitar el recipiente al laboratorio). El día elegido, se desechará la primera orina de la mañana. A partir de ese momento, se recogerá la orina emitida a lo largo de todo el día, incluyendo la primera orina de la mañana siguiente.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className='card-title text-primary text-center'>Exámenes de Heces</h4>
      <hr style={{ width: 180, background: '#8497AB' }} />
      <div className="row questions-content-row">
        <div className="col-md-7 mx-auto">
          <div className="accordion" id="accordionHeces">
            <div className="card">
              <div className="card-header" id="headingHecesOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseHecesOne"
                    aria-expanded="true"
                    aria-controls="collapseHecesOne"
                  >
                    Exámen de Heces
                  </button>
                </h2>
              </div>
              <div
                id="collapseHecesOne"
                className="collapse show"
                aria-labelledby="headingHecesOne"
                data-parent="#accordionHeces"
              >
                <div className="card-body text-justify">
                  Recolectar la muestra de heces en recipiente esterilizado y limpio, con un máximo de 2Hrs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingHecesTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseHecesTwo"
                    aria-expanded="false"
                    aria-controls="collapseHecesTwo"
                  >
                    Coprocultivo
                  </button>
                </h2>
              </div>
              <div
                id="collapseHecesTwo"
                className="collapse"
                aria-labelledby="headingHecesTwo"
                data-parent="#accordionHeces"
              >
                <div className="card-body text-justify">
                  Recolectar la muestra de heces en recipiente esterilizado y limpio, con un máximo de 2Hrs. Tener cuidado que la muestra de heces no se mezcle con la orina.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

