
import './styles/About.css';
import img1 from './../icons/Inmunolab/tomando_muestra.jpg';
import img2 from './../icons/Inmunolab/microscopio.jpg';
import img3 from './../icons/Inmunolab/objetivos.jpg';
import img_bg from './../icons/Inmunolab/worker.jpeg';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const rutaActual = window.location.pathname;
    console.log('Ruta actual:', rutaActual);
  }, []);



  return (
    <>
      <div className="row about-row">
        <h2 className='title-about animate__animated animate__slideInDown'>Acerca de Nosotros</h2>
        <span className='line'></span>
        <p className='p-about animate__animated animate__slideInLeft'>
          Por mas de 45 años hemos dado un servicio seguro, confiable y de calidad. Contamos con personal altamente capacitado en las distintas áreas del laboratorio y con equipo de última generación.
          <br />
          <br />
          Así mismo disponemos de un sistema NOVA internacional con México, en donde tanto el paciente como su doctor puede acceder para verificar sus resultados en tiempo inmediato que se procesan las pruebas. Teniendo también acceso a su historial clínico.
          <br /><br />
          PERSONAL CAPACITADO Y EQUIPO DE VANGUARDIA
          <br />
          Contamos con profesionales y personal altamente calificado para atender la necesidad de cada paciente.
          Así como innovamos constantemente en equipos de alta tecnología y a la vanguardia de salud.
        </p>
        <img className="bg-img" src={img_bg} />
      </div>


      <section id="sec-con" className="row" style={{ background: '#F5F9FD' }} >
        <div className="col-md-6 mx-auto" style={{ marginTop: '12vw' }}>
          <h2 className='text-center card-title title-conoce mx-auto'>Conoce Más</h2>
          <hr />
          <p className=' text-justify' style={{ letterSpacing: 2, textAlign: 'justify' }}>
            Emitimos resultados oportunos y confiables con respaldo de garantía de calidad externa de la AQBG (Asociación de Químicos
            Biólogos de Guatemala) en el programa PEEC (Programa de Evaluación externa de calidad) donde se evalúa y corrobora la
            certeza de los laboratorios clínicos que se realizan.
            <br />
            Somos un laboratorio de proyección social. Que  da soporte a distintas instituciones del sector público
            y privado, para ayudar aquellos guatemaltecos de escasos recursos que no pueden costear la totalidad
            de las pruebas de la orden de laboratorio emitida por el Médico tratante.
          </p>
        </div>

        <span className='line-sep'></span>
      </section>



      <div className="row rs1" style={{ background: '#F5F9FD' }}>
        <div className="col-md-5 mx-auto column">
          <h2>Visión</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>
            Ser un laboratorio clínico de referencia, especializado y de alto rendimiento, con un equipo profesional que brinda resultados confidenciales, confiables y eficientes, garantizando el diagnóstico y veracidad de los resultados.
          </p>
          <b>Enfoque</b>
          <p className='mt-2' style={{ textAlign: 'justify' }}>
            Con un enfoque inquebrantable en la calidad y la excelencia, nos comprometemos a mantener la confiabilidad y precisión de cada uno de los resultados. A través de una combinación de conocimientos especializados y tecnología de punta.
          </p>
        </div>
        <div className="col-md-5 column">
          <img src={img1} className="img-mision" />
        </div>
        <span className='line-sep'></span>
      </div>
      <div className="row rs2" style={{ background: '#F5F9FD' }}>
        <div className="col-md-4 mx-auto column">
          <img src={img2} className="img-mision2" />
        </div>
        <div className="col-md-6 mx-auto column">
          <h2>Misión</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>
            Brindar resultados certeros, precisos y oportunos, que ayuden al médico a la emisión de un diagnóstico confiable.
          </p>
          <b>Compromiso</b>
          <p className='mt-2' style={{ textAlign: 'justify' }}>
            Al priorizar la precisión, la puntualidad y la ética en cada aspecto de nuestro trabajo, nos esforzamos por ser un pilar de confianza en el viaje de salud de cada paciente. Nos comprometemos a garantizar que tanto los pacientes, así como sus proveedores de atención médica cuenten con la información necesaria para tomar decisiones sobre su salud y bienestar.
          </p>
        </div>
        <span className='line-sep'></span>
      </div>
      <div className="row rs3" style={{ background: '#F5F9FD' }}>
        <div className="col-md-5 mx-auto column">
          <h2>Objetivos</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>
            Ofrecer un servicio de calidad desde la toma de muestra hasta la entrega de los resultados. Creando fidelidad y confianza a través de una atención al cliente, excepcional, una comunicación clara y resultados precisos.
          </p>
          <b>Innovación</b>
          <p className='mt-2' style={{ textAlign: 'justify' }}>
            Continuar a la vanguardia en innovación y desarrollo en el campo de los exámenes de laboratorio para proporcionar un impacto significativo en la salud y el bienestar de las personas.
          </p>
        </div>
        <div className="col-md-5 column">
          <img src={img3} className="img-mision" />
        </div>
      </div>
    </>
  );
}

export default About;
