
import './styles/Home.css';
import './styles/HomeMobile.css';
import services_icon from './../icons/Inmunolab/health.png';
import health_icon from './../icons/Inmunolab/consul.png';
import location_icon from './../icons/Inmunolab/location.png';
import background from './../icons/Inmunolab/wave-haikei2.png';
import nosotros_img from './../icons/Inmunolab/nosotros.png'
import initial_image from './../icons/Inmunolab/test_show.jpeg';
import test_tube from './../icons/Inmunolab/test_tube.png';
import TypeWritter from './../helpers/TypeWritter';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="row ">
        <img className='image' src={initial_image} alt="" />
        <h1 className='title animate__animated animate__fadeInLeft'>INMUNOLAB</h1>
        <p className='p-0 animate__animated animate__fadeInDown'>
          Somos un laboratorio de análisis clínico nivel IV, pionero en referencias hospitalarias y de laboratorios,  especializado en el área de inmunología.
          Damos el soporte necesario en el diagnostico de enfermedades inmunes y autoinmunes. Para lo cual contamos con una amplia gama de pruebas bioquímicas, coprourológicas, hormonales y de enfermedades infecciosas.
        </p>
        <Link className='btn btn-0' to="/About">Conocer Más</Link>
      </div>

      <div className="row services animate__animated animate__fadeInLeft">
        <div className='col-md-6 nosotros mx-auto'>
          <h2 className='text-primary text-center animate__animated animate__slideInDown'>Nosotros</h2>
          <p className='p-1 text-center mx-auto animate__animated animate__slideInDown'>
            Emitimos resultados de forma oportuna con respaldo de garantía de calidad de la AQBG (Asociación de Químicos Biólogos de Guatemala) en el programa PEEC (Programa de Evaluación Externa de Calidad). Quienes evalúan y corroboran la certeza de los exámenes clínicos que se realizan.
          </p>
          <p className='p-1 text-center mx-auto'>
            Somos un laboratorio con proyección social. Que da soporte a distintas instituciones del sector público y privado, para ayudar aquellos guatemaltecos de escasos recursos que no pueden costear la totalidad de las pruebas de la orden de laboratorio emitida por el Médico tratante.
          </p>
          <hr />

        </div>
        <div className="col-md-5">
          <img src={nosotros_img} className='test-tube' />
        </div>
        <img src={background} className="img-background mx-auto" />
      </div >
      <div className="row sub-row animate_fade" >
        <img src={background} className="img-background2 mx-auto" />
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <Link to='/Services'>
              <img className='img-1' src={services_icon} alt="" />
            </ Link >
            <h2 className='text-center text-primary t-1'>Servicios</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <Link to="https://inmunolab.dxclinicos.com/login">
              <img className='img-1' src={health_icon} alt="" />
            </Link>
            <h2 className='text-center text-primary t-1'>Consultas</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <Link to='https://maps.app.goo.gl/Jv7W9NjdqkxWm8V78'>
              <img className='img-1' src={location_icon} />
            </Link>
            <h2 className='text-center text-primary t-1'>Ubicación</h2>
          </div>
        </div>
      </div>
      <div className="row carousel-row">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: '100%', height: '100%' }}>
          <ol className="carousel-indicators">
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.birmingham.ac.uk/CachedImage.axd?ImageName=laboratory-3827745-1920.jpg&ImageWidth=1920&ImageHeight=1280&ImageVersionID=1969570&ImageModified=20200902121951" alt="First slide" />
              <div className="carousel-caption d-none d-md-block first-block">
                <h5>Personal Capacitado y Equipo de Vanguardia</h5>
                <p>Contamos con profesionales y personal altamente calificado para atender la necesidad de cada paciente.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.fcv.org/co/images/la-ruta-de-la-vida/unidad-de-laboratorios/laboratorio-clinico-3.webp" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tecnólogia</h5>
                <p>Innovamos constantemente en equipos de alta tecnología y a la vanguardia de la salud.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: '100%', width: '100%' }} className="d-block " src="https://laboratoriosedulab.com/wp-content/uploads/2020/06/Edulab_servicios_Inmunologia_analisis.jpg" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Facilidades de Pago</h5>
                <p>Precios accesibles y competitivos con el mercado disponibles para ser cancelados por credito, debito, transferencias, etc... </p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </ >
  );
}
export default Home;







