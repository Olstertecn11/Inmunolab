
import './styles/Services.css'

import { useState, useEffect } from 'react';
import CustomSlide from '../widgets/customSlide';



const Services = () => {
  var images = [
    "https://s3-pagapoco-files-dev.s3.us-east-2.amazonaws.com/profile-images/pagapoco_user_oferta9914posi1.jpeg",
    "https://quimicafacil.net/wp-content/uploads/2021/06/Notas-de-quimica-dest-1.jpg",
    "https://s1.eestatic.com/2019/06/11/ciencia/salud/salud_405470340_125254447_1706x1280.jpg",
    "https://www.centroanaliticopozuelo.com/wp-content/uploads/2022/03/shutterstock_1702172983-scaled.jpg",
    "https://www.enac.es/documents/7020/73fef32e-4e1c-4ae5-b4a0-722d8d618626",
    "https://saludconlupa.com/media/images/img-20210810-wa0065.width-1920.jpg"
  ]



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CustomSlide images={images}
        titles={["Laboratorio de Referencia", "Exámenes para tarjeta de salud"]}
        texts={["Hemos sido pioneros en referencias hospitalarias y de laboratorios por más de 45 años, dando confianza y certeza de los resultados.",
          "Uno de los requisitos para obtener la tarjeta de salud o constancia de buena salud, es realizar los siguientes exámenes de laboratorio:"]}
        showTitle={true} showBack={true} order={false} Ids={[0, 1]}
      />
      <CustomSlide images={images}
        titles={["Tomas de muestras con doctores", "Hospitalario"]}
        texts={["Planificamos con el área de salud de distintas empresas, la toma de muestras para pacientes a nivel individual y corporativo.",
          "Recepción de toma de muestras de pacientes hospitalarios y ambulatorios."]}
        showTitle={false} showBack={false} order={true} Ids={[2, 3]}
      />
      <CustomSlide images={images}
        titles={["Seguros", "Jornadas de exámenes de laboratorio"]}
        texts={["Contamos con una amplia cobertura de seguros, como lo son:",
          "Planificamos con el área de salud de distintas empresas, la toma de muestras para pacientes a nivel individual y corporativo."]}
        showTitle={false} showBack={true} order={false} Ids={[4, 5]}
      />

    </div>
  )

}

export default Services;
