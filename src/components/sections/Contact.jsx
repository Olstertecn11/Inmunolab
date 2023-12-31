import './styles/Contact.css';
import { Link } from 'react-router-dom';
import background from './../icons/Inmunolab/wave-haikei2.png';
import qr from './../icons/Inmunolab/qr.png';

const Contact = () => {
  return (
    <div className='contenedor'>
      <div className="row row-contact">
        <div className="col-md-5  col0">
          <div className="card-body card-0">
            <h2 className="animate__animated animate__fadeInLeft">¡Nos encataría saber de ti!</h2>
            <div className="form-group">
              <p className="animate__animated animate__fadeInLeft">
                Si tienes alguna pregunta, inquietud o simplemente deseas obtener más información sobre los servicios de laboratorio de vanguardia en inmunología y demás, no dudes en ponerte en contacto con nosotros.
              </p>
            </div>
            <br />
            <p className=''>
              <i className='fas fa-location-dot mr-4 ' style={{ color: '#08ABD8' }}></i>4a Av. 13-67 zona 9, Ciudad de Guatemala
            </p>
            <p className=''>
              <i className='fas fa-envelope mr-4 ' style={{ color: '#08ABD8' }}></i>
              info@inmunolab.gt
            </p>
            <p className=''>

              <i className='fas fa-phone mr-4' style={{ color: '#08ABD8' }}></i>
              <Link to="">
                +502 40372071/39948444
              </Link>
            </p>
            <br />
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-4 social-media">
              <Link to="https://www.facebook.com/inmunolabgt">
                <i className="fa-brands fa-facebook fa-fw" style={{ fontSize: '24px', margin: '10px' }}></i>
              </Link>
              <Link to="https://instagram.com/inmunolabguatemala?igshid=MzRlODBiNWFlZA==">
                <i className="fa-brands fa-instagram fa-fw" style={{ fontSize: '24px', margin: '10px' }}></i>
              </Link>
              <Link to="https://www.linkedin.com/company/inmunolab/">
                <i className="fa-brands fa-linkedin fa-fw" style={{ fontSize: '24px', margin: '10px' }}></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col1">
          <div className="card-body card-1">
            <h2 className="card-title animate__animated animate__fadeInLeft">Contactanos</h2>
            <br />
            <div className="form-group">
              <div className="form-group">
                <input type="text" placeholder='Nombre' className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" placeholder='Correo' className="form-control" />
              </div>
              <div className="form-group">
                <textarea cols="30" rows="10" placeholder='Mensaje' className="form-control">
                </textarea>
              </div>
              <button className='btn btn-light'> <i className='fa-solid fa-paper-plane fa-fw'></i> Enviar</button>
            </div>
          </div>
        </div>
        <img src={background} className="img-background" style={{ left: 0 }} />
      </div>
      <div className="row">
        <img src={background} className="img-background2 mx-auto" style={{ top: -49 }} />
        <div className="col-md-6 _col0 mx-auto">
          <h2 className='text-center'>Nuestra Ubicación</h2>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30887.931918506623!2d-90.55964558916013!3d14.59956060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a31729598997%3A0x80cb70d5cee00e55!2sInmunolab!5e0!3m2!1ses-419!2sni!4v1702432698950!5m2!1ses-419!2sni"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-4 mx-auto _col1">
          <br />
          <br />
          <br />
          <h3 className='text-center'>Escanea el QR</h3>
          <img src={qr} className="qr-img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
