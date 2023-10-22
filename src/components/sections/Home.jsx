
import './styles/Home.css';
import services_icon from './../icons/Inmunolab/health.png';
import health_icon from './../icons/Inmunolab/consul.png';
import location_icon from './../icons/Inmunolab/location.png';
import background from './../icons/Inmunolab/wave-haikei2.png';
import test_tube from './../icons/Inmunolab/test_tube.png';

const Home = () => {
  return (
    <div>
      <div className="row">
        <img className='image' src="https://laboratoriosedulab.com/wp-content/uploads/2020/06/Edulab_servicios_Inmunologia.jpg" alt="" />
        <h1 className='title'>INMUNOLAB</h1>
        <p className='p-0'>Somos un laboratorio de análisis clínico Nivel IV, especializado en el área de inmunología, puntualmente damos el soporte
          necesario en el diagnóstico de enfermedades inmunes y autoinmunes, contando también con todo el menú de pruebas
          bioquímicas, coprourológicas, hormonales y de enfermedades infecciosas.</p>
        <button className='btn btn-0'>Conocer Más</button>
      </div>
      <div className="row sub-row" >
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={services_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Servicios</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={health_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Consulta</h2>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="card-body">
            <img className='img-1' src={location_icon} alt="" />
            <h2 className='text-center text-primary t-1'>Ubicación</h2>
          </div>
        </div>
      </div>
      <div className="row services">
        <div className='col-md-6 nosotros mx-auto'>
          <h2 className='text-primary text-center'>Nosotros</h2>
          <br />
          <p className='p-1 text-center mx-auto'>
            Por más de 44 años hemos dado un servicio seguro, confiable y de calidad, siendo históricamente un laboratorio de alta
            referencia.
          </p>
          <hr />
          <p className='p-1 tex-center mx-auto'>
            Inmunolab cuenta con una amplia experiencia a lo largo de los años, en metodología y tecnología
            avanzada necesaria para realizar pruebas de diagnóstico especializada, así mismo como exámenes de
            rutina general
          </p>
        </div>
        <div className="col-md-4">
          <img src={test_tube} className='test-tube' />
        </div>
        <img src={background} className="img-background mx-auto" />
      </div >
    </div >

  );
}
export default Home;







