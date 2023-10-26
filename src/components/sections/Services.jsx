
import './styles/Services.css'
import img from './../icons/Inmunolab/examinando.jpg';
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';



const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function changeImage(service) {
    if (service == "Inmunología") {
      setImageBox()
    }
  }

  const handleClick = (event) => {
    const lastButtons = document.querySelectorAll(".active-b");
    lastButtons.forEach(button => {
      button.classList.remove("active-b");
    });

    const currentButton = event.target;
    currentButton.classList.add("active-b");

    const lastPs = document.querySelectorAll(".p-show");
    lastPs.forEach(p => {
      p.classList.remove("p-show");
    });

    const IdToSearch = event.target.innerText;
    const currentText = document.querySelectorAll("#" + IdToSearch);
    currentText.forEach(text => {
      text.classList.add("p-show");
    });
  }
  return (
    <>
      <div className="row services-row">
        <Fade left>
          <h2 className='title-services'>Nuestros Servicios</h2>
        </Fade >
        <span className='line-services'></span>
        <div className="col-md-5 mx-auto">
          <Fade clear>
            <div className="card-body service-card">
              <img src="https://s3-pagapoco-files-dev.s3.us-east-2.amazonaws.com/profile-images/pagapoco_user_oferta9914posi1.jpeg" />
              <div className="buttons">
                <button className='btn active-b' onClick={handleClick}>Inmunología</button>
                <button className='btn' onClick={handleClick}>Química</button>
                <button className='btn' onClick={handleClick}>Hematología</button>
              </div>
            </div>
          </Fade >
        </div>
        <div className="col-md-5 mx-auto row-text-s">
          <p className='services-text p-show' id='Inmunología'>
            A través de tecnologías de vanguardia y métodos de diagnóstico avanzados, realizamos una evaluación exhaustiva del sistema inmunológico de cada paciente, identificando de manera precisa y precisa posibles desequilibrios y disfunciones. Nuestros servicios incluyen pruebas especializadas de alergia, perfiles inmunológicos completos, evaluaciones de respuesta inmune a enfermedades específicas y terapias personalizadas diseñadas para mejorar la función inmunológica y promover la salud a largo plazo.
          </p>
          <p className='services-text' id="Química">
            Nuestros servicios en el campo de la química abarcan desde pruebas de laboratorio de rutina hasta análisis complejos y especializados para evaluar la función y los desequilibrios químicos en el cuerpo humano. A través de tecnologías de vanguardia y métodos de análisis avanzados, realizamos evaluaciones exhaustivas para proporcionar diagnósticos precisos y personalizados, y así facilitar el tratamiento y la gestión efectiva de condiciones médicas específicas.
          </p>
          <p className='services-text' id="Hematología">
            Tambien abarcamos desde pruebas de laboratorio especializadas y análisis de muestras de sangre hasta diagnósticos precisos y tratamientos especializados adaptados a las necesidades específicas de cada paciente. A través de tecnologías de vanguardia y métodos de análisis avanzados, evaluamos exhaustivamente la composición sanguínea y la función de la médula ósea para proporcionar diagnósticos tempranos y precisos, y así facilitar el tratamiento oportuno y la gestión efectiva de diversas condiciones hematológicas.
          </p>
          <span className='line-p'></span>
        </div>
        <img src={img} className="img-back-s" />
      </div>
    </>
  );
}

export default Services;
