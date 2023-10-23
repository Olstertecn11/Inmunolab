import './styles/Footer.css';
import icon from './../icons/Inmunolab/Isotipo blanco.png';
import phone_icon from './../icons/Inmunolab/phone.png'
import location from './../icons/Inmunolab/location2.png'
import face from './../icons/Inmunolab/face.png'
import insta from './../icons/Inmunolab/insta.png'
import linke from './../icons/Inmunolab/linke.png'
import { Link } from 'react-router-dom';



import React from 'react';

const Footer = () => {
  return (
    <footer className="row footer" style={{ paddingTop: '5%' }}>
      <div className="col-md-5 mt-3">
        <h2 className='footer-title'>
          Inmunolab
          <img src={icon} className="icon" />
        </h2>
        <div className="items items-0">
          <p className="footer-subtext"> <img src={location} style={{ width: '1.4vw' }} /> 4a Av. 13-67 zona 9, Ciudad de Guatemala</p>
          <p className="footer-subtext"> <img src={phone_icon} style={{ width: '1.4vw' }} /> 59621085</p>
        </div>
      </div>
      <div className="col-md-3 links">
        <h2 className='mt-4 footer-text'>Enlaces</h2>
        <div className="items">
          <li className='li'>Nosotros</li>
          <li className='li'>Servicios</li>
          <li className='li'>Contactanos</li>
        </div>
      </div>
      <div className="col-md-3 network">
        <h2 className='text-center footer-text mt-4'>Síguenos</h2>
        <div className="items">
          <li className='text-center li'> <Link to="https://www.facebook.com/inmunolabgt"><img src={face} style={{ width: '1.8vw' }} /></Link> Facebook</li>
          <li className='text-center li'> <Link to=""><img src={insta} style={{ width: '1.8vw' }} /></Link> Instagram</li>
          <li className='text-center li'> <Link to=""><img src={linke} style={{ width: '1.4vw' }} alt="" /></Link> Linkedin</li>
        </div>
      </div>
      <div className='row row-margin'>

      </div>
    </footer>
  );
};

export default Footer;

