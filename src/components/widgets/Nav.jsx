
import icon from './../icons/Inmunolab/logo_horizontal.png';
import './styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>

			<nav className="navbar navbar-expand-lg bg-light navbar-light navbar-0">
				<div className="container-fluid">
					<p className="navbar-brand text-center mt-3 text-white nav-text">502+59621085 |
						<a className='text-white nav-text' > info@inmunolab.gt</a>
					</p>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<p className='mt-3 text-white nav-text'>4a Av. 13-67 zona 9, Ciudad de Guatemala</p>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav className="navbar navbar-expand-lg bg-light navbar-light navbar-1">
				<div className="container-fluid">
					<a className="navbar-brand"><img src={icon} width={190} /></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" to={'/'} >Inicio</Link>
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
