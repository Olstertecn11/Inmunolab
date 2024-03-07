import Swal from 'sweetalert2'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Questions.css';

const Questions = () => {
  const history = useNavigate();


  const texts = [
    `<li>Se recomienda que sea la primera orina de la mañana, o bien retener las ganas de orinar por lo menos dos horas antes de orinar y entregar la muestra para su análisis, en un frasco estéril nuevo.</li>
                  <li>Tomar en cuenta que el tiempo máximo de la recolección</li>
                  <li>De la muestra para su análisis en el laboratorio es de 2 horas</li>
                  <li>Las mujeres no deben estar menstruando al momento del análisis de orina</li>
                  <li>
                      Para niños pequeños se deben limpiar sus partes íntimas y para niños menores de 2 años colocar bolsa
                      pediátrica por parte de la persona responsable del menor del mismo.

                  </li>
                  <li>Rotular las muestras con el nombre del paciente, edad y hora de recolección.</li>
    `,
    `    
              <li>
                      Antes de empezar, lavarse las manos.
                    </li>
                    <li>
                      Para las mujeres, limpiar de adelante hacia atrás, asegurándose de que no queden restos de jabón ni agua.
                    </li>
                    <li>
                      Para los hombres no circuncidados, retraer el prepucio para limpiar el glande.
                    </li>
                    <li>
                      Utilizar un frasco para orina estéril nuevo (de 100 mL).
                    </li>
                    <li>
                      Al comenzar a orinar, desechar la primera porción y recolectar la siguiente sin dejar de orinar.
                    </li>
                    <li>
                      En mujeres, separar los labios mayores con la mano para comenzar a orinar. En hombres no circuncidados, sostener el prepucio y dejar pasar una cantidad significativa de orina. En los hombres no circuncidados hay que sostener el prepucio, dejando pasar una cantidad significante de orina.
                    </li>
                    <li>
                      Acercar el frasco estéril y llenarlo 2/3, evitando que el chorro de orina toque la región genital.
                    </li>
                    <li>
                      Cerrar herméticamente el frasco. El frasco debe ser estéril y nuevo, por lo que no se debe tocar su interior al abrirlo.
                    </li>
        `,
    `
<li>Un recipiente de plástico con capacidad de un galón para recolectar la orina de 24 horas.</li>
        <li>Inicias la recolección de orina durante 24 horas:
        </li>
                <li>Se inicia recolectando la segunda orina de la mañana.</li>
                <li>Cada vez que orine depositar toda la orina en el recipiente.</li>
                <li>La ultima muestraa recolectar, es la primera orina del día siguiente.</li>
        <li>Escribir el nombre en la etiqueta.</li>
        <li>En caso de depuración de creatina, se le extraerá sangre en el laboratorio.</li>

`,
    `
        <li>
            No llenar completamente el frasco, solo se necesita el equivalente a una ficha de 5 centavos frasco viene
            con paleta
        </li>
        <li>Llevar la muestra al laboratorio dentro de las 2 horas posteriores a su recolección.</li>
        <li>Rotular las muestras con el nombre del paciente, edad y hora de recolección.</li>
        <li>TOMAR EN CUENTA QUE EL TIEMPO MÁXIMO DE RECOLECCIÓN DE LA MUESTRA PARA SU ANÁLISIS EN EL LABORATORIO ES DE 2 HORAS.</li>
`,
    `
<li>Se recomienda que la muestra sea la primera del día.</li>
        <li>No llenar completamente el frasco de la muestra, solo se necesita la mitad (frasco de 100 mL, en ocasiones viene con paleta para recolectar la muestra).</li>
        <li>Llevar la muestra al laboratorio dentro de las 2 horas posteriores a su recolección.</li>
        <li>Rotular las muestras con el nombre del paciente, edad y hora de recolección.</li>
        <li>TOMAR EN CUENTA QUE EL TIEMPO MÁXIMO DE RECOLECCIÓN DE LA MUESTRA PARA SU ANÁLISIS EN EL LABORATORIO ES DE 2 HORAS.</li>
`

  ]



  const openModal = (title, content) => {
    Swal.fire({
      title: `<strong>${title}</strong>`,
      icon: "info",
      html: `${content}`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
<i class="fa fa-thumbs-up"></i> Gracias!
`,
      confirmButtonAriaLabel: "No Entendi!",
      cancelButtonText: `
<i class="fa fa-thumbs-down"></i>
`,
      cancelButtonAriaLabel: "Thumbs down"
    });

  }


  return (
    <div>
      <div className="row questions-row">
        <img src="https://dfb.epn.edu.ec/images/Noticias/faqs2.jpg" className='img-q' />
      </div>
      <h4 className='card-title text-primary text-center'>Exámenes de Orina</h4>
      <hr style={{ width: 180, background: '#8497AB' }} />
      <div className="row questions-content-row">
        <div className="col-md-7 mx-auto">
          <div className="accordion" id="accordionOrina">
            <div className="card">
              <div className="card-header" id="headingOrinaOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaOne"
                    aria-expanded="true"
                    aria-controls="collapseOrinaOne"
                  >
                    Exámen de Orina
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaOne"
                className="collapse show"
                aria-labelledby="headingOrinaOne"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify">

                  El examen general de orina se entiende como una prueba de rutina, rápida y sencilla. Este análisis es uno de los más importantes ya que proporciona información general sobre el estado de salud del paciente al médico. La muestra de orina también se utiliza para apoyar el diagnóstico y seguimiento de tratamientos, así como para detectar enfermedades renales, diabetes, enfermedades hepáticas y otras de origen diverso (autoinmunes).
                  La realización de la muestra por parte del paciente podría ser posible debido al aspecto de la muestra (turbia, limpia, amarilla u opaca), al olor de la misma (dulce o fétido) o a síntomas como orinar con frecuencia (poliuria) o sentir ardor al orinar, independientemente del género.
                  <hr />
                  <Link className='text-danger' onClick={() => openModal('Instrucciones', texts[0])}>Instrucciones</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingOrinaTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaTwo"
                    aria-expanded="false"
                    aria-controls="collapseOrinaTwo"
                  >
                    Urocultivo
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaTwo"
                className="collapse"
                aria-labelledby="headingOrinaTwo"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify p-4">
                  El urocultivo es un examen de laboratorio para analizar la presencia de bacterias u otros microorganismos en una muestra de orina, lo que indica la presencia de infecciones urinarias en adultos y niños. Es más frecuente en mujeres y niños pequeños
                  <hr />
                  <p>
                    <b>Estos análisis se llevan a cabo cuando se sospecha</b>
                    <li>Infecciones urinarias o vesicales</li>
                    <li>Síntomas como dolor o ardor al orinar, presencia de sangre en la orina, fiebre o malestar</li>
                    <li>Cultivos de control para verificar completa desaparición de la infeccon urinaria</li>
                    <br />
                    <b className='text-font-italic'> <em>TOMAR EN CUENTA QUE EL TIEMPO MAXIMO DE LA RECOLECCION DE LA MUESTRA PARA SU ANÁLISIS EN EL LABORATORIO ES DE 2 HORAS.</em> </b>
                  </p>
                  <hr />

                  <Link className='text-danger' onClick={() => openModal('Instrucciones', texts[1])}>Instrucciones</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingOrinaThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOrinaThree"
                    aria-expanded="false"
                    aria-controls="collapseOrinaThree"
                  >
                    Exámen de Orina 24 horas
                  </button>
                </h2>
              </div>
              <div
                id="collapseOrinaThree"
                className="collapse"
                aria-labelledby="headingOrinaThree"
                data-parent="#accordionOrina"
              >
                <div className="card-body text-justify">
                  La recolección de orina en 24 horas es una prueba diagnóstica rápida y simple que ayuda a diagnosticar problemas en los riñones. Generalmente se realiza para determinar cuánta creatinina se elimina a través de los riñones, pero también puede usarse para medir proteínas, hormonas, minerales y otros compuestos químicos.
                  <hr />
                  <Link className='text-danger' onClick={() => openModal('Instrucciones', texts[2])}>Instrucciones</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className='card-title text-primary text-center'>Exámenes de Heces</h4>
      <hr style={{ width: 180, background: '#8497AB' }} />
      <div className="row questions-content-row">
        <div className="col-md-7 mx-auto">
          <div className="accordion" id="accordionHeces">
            <div className="card">
              <div className="card-header" id="headingHecesOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseHecesOne"
                    aria-expanded="true"
                    aria-controls="collapseHecesOne"
                  >
                    Exámen de Heces
                  </button>
                </h2>
              </div>
              <div
                id="collapseHecesOne"
                className="collapse show"
                aria-labelledby="headingHecesOne"
                data-parent="#accordionHeces"
              >
                <div className="card-body text-justify">
                  El examen de heces consiste en la obtención de una muestra del paciente que posteriormente se analiza en un laboratorio clínico. Permite al médico diagnosticar la presencia de infecciones o problemas en el tracto intestinal, así como detectar sangre u otros signos de enfermedades inflamatorias o tumorales.
                  <hr />
                  <Link className='text-danger' onClick={() => openModal('Instrucciones', texts[3])}>Instrucciones</Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingHecesTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseHecesTwo"
                    aria-expanded="false"
                    aria-controls="collapseHecesTwo"
                  >
                    Coprocultivo
                  </button>
                </h2>
              </div>
              <div
                id="collapseHecesTwo"
                className="collapse"
                aria-labelledby="headingHecesTwo"
                data-parent="#accordionHeces"
              >
                <div className="card-body text-justify">
                  El coprocultivo, también conocido como cultivo microbiológico de heces, no requiere de una preparación especial, pero se deben tomar algunos cuidados al recolectar la muestra para evitar alteraciones en los resultados. Se recomienda realizar este examen cuando se sospeche de infecciones bacterianas intestinales u otras alteraciones gastrointestinales
                  <hr />
                  <Link className='text-danger' onClick={() => openModal('Instrucciones', texts[4])}>Instrucciones</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

