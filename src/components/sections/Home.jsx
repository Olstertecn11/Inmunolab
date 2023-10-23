
import './styles/Home.css';
import services_icon from './../icons/Inmunolab/health.png';
import health_icon from './../icons/Inmunolab/consul.png';
import location_icon from './../icons/Inmunolab/location.png';
import background from './../icons/Inmunolab/wave-haikei2.png';
import test_tube from './../icons/Inmunolab/test_tube.png';
import TypeWritter from './../helpers/TypeWritter';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="row">
        <img className='image' src="https://laboratoriosedulab.com/wp-content/uploads/2020/06/Edulab_servicios_Inmunologia.jpg" alt="" />
        <TypeWritter _class='title' text="INMUNOLAB" />
        <p className='p-0'>Somos un laboratorio de análisis clínico Nivel IV, especializado en el área de inmunología, puntualmente damos el soporte
          necesario en el diagnóstico de enfermedades inmunes y autoinmunes, contando también con todo el menú de pruebas
          bioquímicas, coprourológicas, hormonales y de enfermedades infecciosas.</p>
        <button className='btn btn-0'>Conocer Más</button>
      </div>

      <div className="row services">
        <div className='col-md-6 nosotros mx-auto'>
          <h2 className='text-primary text-center'>Nosotros</h2>
          <br />
          <p className='p-1 text-center mx-auto'>
            Por más de 44 años hemos dado un servicio seguro, confiable y de calidad, siendo históricamente un laboratorio de alta
            referencia.
          </p>
          <p className='p-1 text-center mx-auto'>
            <b>Inmunolab</b> cuenta con una amplia experiencia a lo largo de los años, en metodología y tecnología
            avanzada necesaria para realizar pruebas de diagnóstico especializada, así mismo como exámenes de
            rutina general
          </p>
          <hr />
          <div className="container">
            <Link className='btn btn-primary text-center btn-nosotros' to="/About">Leer Más</Link>
          </div>
        </div>
        <div className="col-md-5">
          <img src="https://media.giphy.com/media/Q66Otqclp5Xmzg2B8X/giphy.gif" className='test-tube' />
        </div>
        <img src={background} className="img-background mx-auto" />
      </div >
      <div className="row sub-row" >
        <img src={background} className="img-background2 mx-auto" />
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={services_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Servicios</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={health_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Consultas</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={location_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Ubicación</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: '100%', height: '100%' }}>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/redi-inmunologia/bajada.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/redi-inmunologia/bajada.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/redi-inmunologia/bajada.jpg" alt="First slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div >

  );
}
export default Home;







