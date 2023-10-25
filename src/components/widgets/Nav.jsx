
import icon from './../icons/Inmunolab/logo_horizontal.png';
import './styles/Nav.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Nav = () => {


  const [active, setActive] = useState('Inicio');

  let location = useLocation();
  let new_location = location.pathname === '/' ? 'Inicio' : location.pathname.substring(1);

  useEffect(() => {
    setActive(new_location);
  }, [new_location]);



  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light navbar-0">
        <div className="container-fluid">
          <p className="navbar-brand text-center mt-3 text-white nav-text">502+23626887 |
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
                <Link className={active === 'Inicio' ? 'nav-link active' : 'nav-link'}
                  to={'/'} >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/About'}
                  className={active === 'About' ? 'nav-link active' : 'nav-link'}
                >Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Services'}
                  className={active === 'Services' ? 'nav-link active' : 'nav-link'}
                >Servicios</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Contact'}
                  className={active === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contactanos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
