
import './styles/Home.css';
import './styles/HomeMobile.css';
import services_icon from './../icons/Inmunolab/health.png';
import health_icon from './../icons/Inmunolab/consul.png';
import location_icon from './../icons/Inmunolab/location.png';
import background from './../icons/Inmunolab/wave-haikei2.png';
import nosotros_img from './../icons/Inmunolab/nosotros.png'
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
				<img className='image' src="https://laboratoriosedulab.com/wp-content/uploads/2020/06/Edulab_servicios_Inmunologia.jpg" alt="" />
				<h1 className='title animate__animated animate__fadeInLeft'>INMUNOLAB</h1>
				<p className='p-0 animate__animated animate__fadeInDown'>Somos un laboratorio de análisis clínico Nivel IV, especializado en el área de inmunología, puntualmente damos el soporte
					necesario en el diagnóstico de enfermedades inmunes y autoinmunes, contando también con todo el menú de pruebas
					bioquímicas, coprourológicas, hormonales y de enfermedades infecciosas.</p>
				<Link className='btn btn-0' to="/About">Conocer Más</Link>
			</div>

			<div className="row services animate__animated animate__fadeInLeft">
				<div className='col-md-6 nosotros mx-auto'>
					<h2 className='text-primary text-center animate__animated animate__slideInDown'>Nosotros</h2>
					<br />
					<p className='p-1 text-center mx-auto animate__animated animate__slideInDown'>
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
						<Link to='/Services'>
							<img className='img-1' src={health_icon} alt="" />
						</Link>
						<h2 className='text-center text-primary t-1'>Consultas</h2>
					</div>
				</div>
				<div className="col-md-3 mx-auto">
					<div className="card-body">
						<Link to='https://maps.app.goo.gl/dj59aHDPvRWrR4mi7'>
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
							<img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/redi-inmunologia/bajada.jpg" alt="First slide" />
							<div className="carousel-caption d-none d-md-block">
								<h5>Personal Capacitado</h5>
								<p>Contamos con profesionales tecnicamente calificados y comprometidos</p>
							</div>
						</div>
						<div className="carousel-item">
							<img style={{ height: '100%', width: '100%' }} className="d-block " src="https://www.fcv.org/co/images/la-ruta-de-la-vida/unidad-de-laboratorios/laboratorio-clinico-3.webp" alt="First slide" />
							<div className="carousel-caption d-none d-md-block">
								<h5>Tecnólogia</h5>
								<p>Contamos con un sistema innovador para consulta de resultados</p>
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







