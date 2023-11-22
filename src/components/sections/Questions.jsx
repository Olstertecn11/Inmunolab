import { useNavigate, Link } from 'react-router-dom';
import './styles/Questions.css';

const Questions = () => {
  const history = useNavigate();
  return (
    <div >
      <div className="row questions-row">
        <img src="https://dfb.epn.edu.ec/images/Noticias/faqs2.jpg" className='img-q' />
      </div>
      <div className="row" >
        <div className="col-md-5 mx-auto">
          <h4 className='card-title text-primary'>Encuentra Respuesta a lo que te interesa</h4>
          <hr />
          <Link className='btn btn-p' target='_blank' to='https://github.com/Olstertecn11/Inmunolab/blob/master/Cata%CC%81logo%20de%20Referencia.pdf' download >
            Descarga Nuevo Instructivo
          </Link>
          <button className='btn btn-p' onClick={() => window.open('./src/components/Referencia.pdf', '_blank')}>
            Descarga Manual de Referencias
          </button>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Examen de Orina
                  </button>
                </h2>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  Se recomienda que sea la primera orina de la mañana, si en dado caso no es posible, dejar transcurrir dos horas sin haber tomado líquido y sin ir al sanitario, posteriormente tomar la muestra en un recipiente esterilizado y limpio. Tomar en cuenta que el tiempo máximo desde la recolección de la muestra para ser analizada en el laboratorio son 2Hrs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Examen de heces
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  Recolectar la muestra de heces en recipiente esterilizado y limpio, con un máximo de 2Hrs.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Examen de orina de 24 horas
                  </button>
                </h2>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                  Se necesita una muestra de orina de 24 horas, recolectarla en un recipiente de plástico estéril para orina de 24 horas (solicitar el recipiente al laboratorio). El día elegido, se desechará la primera orina de la mañana. A partir de ese momento, se recogerá la orina emitida a lo largo de todo el día, incluyendo la primera orina de la mañana siguiente.
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

