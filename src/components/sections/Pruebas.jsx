

import CustomSlide from '../widgets/customSlide';

const Pruebas = () => {
  var images = [
    'https://eominternacional.com/wp-content/uploads/2021/11/inmunologia-clinica.jpg',
    'https://img.europapress.es/fotoweb/fotonoticia_20230919073946_640.jpg',
    'https://manedic.com/wp-content/uploads/2022/07/hematologia.jpg',
    'https://ieqfb.com/wp-content/uploads/master-en-microbiologia-clinica.jpg',
    'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/asi-permanecen-dormidas-las-celulas-tumorales-antes-de-provocar-la-metastasis/9318374-5-esl-MX/Asi-permanecen-dormidas-las-celulas-tumorales-antes-de-provocar-la-metastasis.jpg',
    'https://www.webconsultas.com/sites/default/files/styles/tipo_de_enfermedad/public/enfermedades-reumaticas.jpg'
  ]
  return (
    <div>
      <CustomSlide images={images}
        title={"Pruebas de diagnóstico"}
        titles={["Inmunología", "Química"]}
        texts={["A través de tecnologías de vanguardia y métodos de diagnóstico avanzados, realizamos una evaluación exhaustiva del sistema inmunológico de cada paciente, identificando de manera precisa y precisa posibles desequilibrios y disfunciones. Nuestros servicios incluyen pruebas especializadas de alergia, perfiles inmunológicos completos, evaluaciones de respuesta inmune a enfermedades específicas y terapias personalizadas diseñadas para mejorar la función inmunológica y promover la salud a largo plazo.",
          "Nuestros servicios en el campo de la química abarcan desde pruebas de laboratorio de rutina hasta análisis complejos y especializados para evaluar la función y los desequilibrios químicos en el cuerpo humano. A través de tecnologías de vanguardia y métodos de análisis avanzados, realizamos evaluaciones exhaustivas para proporcionar diagnósticos precisos y personalizados, y así facilitar el tratamiento y la gestión efectiva de condiciones médicas específicas."]}
        showTitle={true} showBack={true} order={false} Ids={[0, 1]}
      />

      <CustomSlide images={images}
        title={"Pruebas de diagnóstico"}
        titles={["Hematología", "Microbiologia Clínica"]}
        texts={["Tambien abarcamos desde pruebas de laboratorio especializadas y análisis de muestras de sangre hasta diagnósticos precisos y tratamientos especializados adaptados a las necesidades específicas de cada paciente. A través de tecnologías de vanguardia y métodos de análisis avanzados, evaluamos exhaustivamente la composición sanguínea y la función de la médula ósea para proporcionar diagnósticos tempranos y precisos, y así facilitar el tratamiento oportuno y la gestión efectiva de diversas condiciones hematológicas.",
          "Las infecciones por agentes patógenos pueden constituir un importante problema de salud para el paciente. La detección adecuada del desarrollo de estos agentes es importante para un tratamiento eficaz."]}
        showTitle={false} showBack={false} order={true} Ids={[2, 3]}
      />

      <CustomSlide images={images}
        title={"Pruebas de diagnóstico"}
        titles={["Pruebas Tumorales", "Pruebas Reumaticas"]}
        texts={["Los marcadores tumorales son sustancias o fluidos biológicos que se pueden medir cuantitativamente para identificar la presencia de cáncer y posiblemente el órgano afectado. Son de gran ayuda para el diagnóstico. ",
          "Las enfermedades reumáticas afectan al aparato locomotor y tejido conectivo. Algunas enfermedades comprendidas en esta especialidad son Lupus Eritematoso Sistémico, Esclerodermia y Esclerosis sistémica."]}
        showTitle={false} showBack={true} order={false} Ids={[4, 5]}
      />

    </div>
  )
}

export default Pruebas;
