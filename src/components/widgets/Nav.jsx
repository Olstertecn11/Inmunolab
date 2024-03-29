
import icon from './../icons/Inmunolab/Logos lab/Logo Final - InmunoLab-01.jpg';
import icon_aniv from './../icons/Inmunolab/Aniv2.png';
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
    var items = document.querySelectorAll(".collapse");
    items.forEach(function(item) {
      item.classList.remove('show');
    });
  }, [new_location]);


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light navbar-0">
        <div className="container-fluid">
          <p className="navbar-brand text-center mt-3 text-white nav-text">
            <a className='text-white nav-text ml-2' > info@inmunolab.gt</a>
          </p>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav2">
            <ul className="navbar-nav nav-0">
              <li className="nav-item">
                <p className='mt-3 text-white nav-text'>
                  7ma. Avenida 9-64 zona 9. Tercer nivel, clínica 309. Ciudad.
                </p>
              </li>
              <li className='mt-3 mr-4 text-white nav-text'>
                |
              </li>
              <li>
                <p className="text-white nav-text"> <img src='' style={{ width: '1.3vw' }} alt="" /> Lunes a Viernes de 7:00am a 4:00pm</p>
              </li>
              <li className='mt-3 ml-4 mr-4 text-white nav-text'>
                |
              </li>
              <li >
                <Link className='mt-3 text-white nav-text' to="https://api.whatsapp.com/send?phone=50240372071"> <i className='fab fa-whatsapp'> </i> WhatsApp</Link>

              </li>
            </ul>
          </div>
        </div >
      </nav >
      <nav className="navbar navbar-expand-lg navbar-light  navbar-1" style={{ background: 'white' }}>
        <div className="container-fluid">
          <a className="navbar-brand"><img src={icon} width={250} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                <Link to={'/Pruebas'}
                  className={active === 'Pruebas' ? 'nav-link active' : 'nav-link'}
                >Pruebas de diagnóstico</Link>
              </li>

              <li className="nav-item">
                <Link to={'/Services'}
                  className={active === 'Services' ? 'nav-link active' : 'nav-link'}
                >Servicios</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Consulta de resultados
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='https://inmunolab.dxclinicos.com/login' className="dropdown-item" href="#">Paciente</Link>
                  <Link to='https://inmunolab.dxclinicos.com/login' className="dropdown-item" href="#">Medico</Link>
                  <Link to='https://inmunolab.dxclinicos.com/login' className="dropdown-item" href="#">Administrador</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/Preguntas"
                  className={active === 'Preguntas' ? 'nav-link active' : 'nav-link'}
                >Preguntas Frecuentes</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Contact'}
                  className={active === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contáctanos</Link>
              </li>
              <img src={icon_aniv} alt="" style={{ width: '5vw' }} />
            </ul>
          </div>
        </div>
      </nav>
    </div >
  );
}

export default Nav;
