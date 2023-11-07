
import './styles/About.css';
import img1 from './../icons/Inmunolab/tomando_muestra.jpg';
import img2 from './../icons/Inmunolab/microscopio.jpg';
import img3 from './../icons/Inmunolab/objetivos.jpg';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="row about-row">
        <h2 className='title-about animate__animated animate__slideInDown'>Acerca de Nosotros</h2>
        <span className='line'></span>
        <p className='p-about animate__animated animate__slideInLeft'>
          Somos un laboratorio de análisis clínico Nivel IV, especializado en el área de inmunología, puntualmente damos el soporte
          necesario en el diagnóstico de enfermedades inmunes y autoinmunes, contando también con todo el menú de pruebas
          bioquímicas, coprourológicas, hormonales y de enfermedades infecciosas.
          <br />
          <br />
          Somos una empresa dedicada y comprometida con la salud del guatemalteco, por lo que nos dedicamos a la proyección social
          dando soporte en pruebas de laboratorio sin costo a menores de edad y adultos mayores de instituciones de servicio social, por
          más de 32 años.
          Por más de 44 años hemos dado un servicio seguro, confiable y de calidad, siendo históricamente un laboratorio de alta
          referencia.
          <br /><br />
          Emitimos resultados oportunos y confiables con respaldo de garantía de calidad externa de la AQBG (Asociación de Químicos
          Biólogos de Guatemala) en el programa PEEC (Programa de Evaluación externa de calidad) donde se evalúa y corrobora la
          certeza de los laboratorios clínicos que se realizan.
        </p>
        <img className="bg-img" src="https://www.comunidad.madrid/sites/default/files/img/personalidades/la_comunidad_ha_tomado_mas_de_18.500_muestras_para_conocer_el_estado_inmunologico_frente_al_covid-19_en_los_centros_socio-sanitarios_2.jpg" />
      </div>
      <div className="row" style={{ background: '#F5F9FD' }}>
        <div className="col-md-5 mx-auto column">
          <h2>Visión</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>Ser un laboratorio clínico de referencia, especializado y de alto rendimiento, con un equipo profesional para brindar resultados confiables y eficientes, garantizando el diagnóstico y veracidad de los resultados.</p>
          <b>Enfoque</b>
          <p className='mt-2' style={{ textAlign: 'justify' }}>Con un enfoque inquebrantable en la calidad y la excelencia, nos comprometemos a mantener la confiabilidad y precisión de cada uno de nuestros resultados. A través de una combinación de conocimientos especializados y tecnología de punta, aspiramos a proporcionar a nuestros clientes y socios médicos información integral y significativa que impulse avances significativos en el campo de la salud y la medicina.</p>
        </div>
        <div className="col-md-5 column">
          <img src={img1} className="img-mision" />
        </div>
        <span className='line-sep'></span>
      </div>
      <div className="row" style={{ background: '#F5F9FD' }}>
        <div className="col-md-4 mx-auto column">
          <img src={img2} className="img-mision2" />
        </div>
        <div className="col-md-6 mx-auto column">
          <h2>Misión</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>Brindar apoyo diagnóstico con equipos de alta tecnología y especializado, al equipo médico, con profesionales de laboratorio clínico comprometidos al servicio de la salud.</p>
          <b>Compromiso</b>
          <p className='mt-2' style={{ textAlign: 'justify' }}>Al priorizar la precisión, la puntualidad y la ética en cada aspecto de nuestro trabajo, nos esforzamos por ser un pilar de confianza en el viaje de salud de cada paciente. Nos comprometemos a garantizar que tanto nuestros pacientes como sus proveedores de atención médica cuenten con la información y el apoyo necesarios para tomar decisiones informadas y efectivas sobre su salud y bienestar</p>
        </div>
        <span className='line-sep'></span>
      </div>
      <div className="row" style={{ background: '#F5F9FD' }}>
        <div className="col-md-5 mx-auto column">
          <h2>Objetivos</h2>
          <p className='mt-3' style={{ textAlign: 'justify' }}>
            Ofrecer servicios de exámenes de laboratorio de calidad y excelencia al público en general, creando fidelidad y confianza a través de una atención al cliente excepcional, una comunicación clara y resultados precisos.
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
