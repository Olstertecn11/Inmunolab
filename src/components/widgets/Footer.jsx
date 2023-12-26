import './styles/Footer.css';
// import icon from './../icons/Inmunolab/Isotipo blanco.png';
import icon from './../icons/Inmunolab/logo_horizontal.png';
import phone_icon from './../icons/Inmunolab/phone.png'
import location from './../icons/Inmunolab/location2.png'
import face from './../icons/Inmunolab/face.png'
import insta from './../icons/Inmunolab/insta.png'
import linke from './../icons/Inmunolab/linke.png'
import schedule from './../icons/Inmunolab/schedule.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaCalendarAlt, FaMapMarker, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



import React from 'react';

const Footer = () => {

  const history = useNavigate();


  const handleClick = (link) => {
    window.location.href = link;
  }

  return (
    <footer className="row footer" style={{ paddingTop: '5%' }}>
      <div className="col-md-5 mt-3">
        <h2 className='footer-title'>
          <img src={icon} className="icon" />
        </h2>
        <div className="items items-0">
          <Link to='https://maps.app.goo.gl/FeM64bLmfyNrFVai8' className="footer-subtext">
            <FaMapMarker className='mr-2' />
            4a av. 13-67 Zona 9, Guatemala
          </Link>
          <Link className="footer-subtext">
            <FaCalendarAlt className='mr-2' />
            Lunes a Viernes de 7:00am a 4:00pm
          </Link>
          <Link to='https://api.whatsapp.com/send?phone=50240372071' className="footer-subtext">
            <FaPhone className='mr-2' />
            39948444
          </Link>
        </div>
      </div>
      <div className="col-md-3 links">
        <h2 className='mt-4 footer-text'>Enlaces</h2>
        <div className="items">
          <li className='li' onClick={() => history('/About')}>Nosotros</li>
          <li className='li' onClick={() => history('/Services')}>Servicios</li>
          <li className='li' onClick={() => history('/Contact')}>Contactanos</li>
        </div>
      </div>
      <div className="col-md-3 network">
        <h2 className='footer-text mt-4'>Síguenos</h2>
        <div className="items">
          <li className='text-center li' onClick={() => handleClick("https://www.facebook.com/inmunolabgt")}>
            <FaFacebook className='mr-2' />
            Facebook
          </li>
          <li className='text-center li' onClick={() => handleClick("https://instagram.com/inmunolabguatemala?igshid=MzRlODBiNWFlZA==")}>
            <FaInstagram className='mr-2' />
            Instagram
          </li>
          <li className='text-center li' onClick={() => handleClick("https://www.linkedin.com/company/inmunolab/")}>
            <FaLinkedin className='mr-2' />
            Linkedin
          </li>
        </div>
      </div>
      <div className='row row-margin'>
      </div>
    </footer >
  );
};

export default Footer;

