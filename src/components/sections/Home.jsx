
import './styles/Home.css';

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
			<div className="row p-4" >
				<div className="row sub-row" >
					<div className="col-md-3 mx-auto">
						<div className="card-body">
							<img className='img-1' src="https://labdiagnostico.com/wp-content/uploads/2021/01/CovidTest-scaled.jpg" alt="" />
							<h2 className='text-center text-primary t-1'>Servicios</h2>
						</div>
					</div>
					<div className="col-md-3 mx-auto">
						<div className="card-body">
							<img className='img-1' src="https://labdiagnostico.com/wp-content/uploads/2021/01/CovidTest-scaled.jpg" alt="" />
							<h2 className='text-center text-primary t-1'>Consulta</h2>
						</div>
					</div>
					<div className="col-md-3 mx-auto">
						<div className="card-body">
							<img className='img-1' src="https://labdiagnostico.com/wp-content/uploads/2021/01/CovidTest-scaled.jpg" alt="" />
							<h2 className='text-center text-primary t-1'>Ubicación</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
