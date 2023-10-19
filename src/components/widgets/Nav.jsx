
import icon from './../icons/Inmunolab/logo_horizontal.png';
import './styles/Nav.css';

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand"><img src={icon} width={190} /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Inicio</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Nosotros</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Servicios</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Galería</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contacto</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>

	);
}

export default Nav;
