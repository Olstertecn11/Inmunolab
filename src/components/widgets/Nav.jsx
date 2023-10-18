
import icon from './images/logo_horizontal.png';

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
								<a className="nav-link active" aria-current="page" href="#">Contact</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Pricing</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Download</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</div>

	);
}

export default Nav;
