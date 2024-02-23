import { useState } from "react";
import img1 from './../icons/Inmunolab/observador.jpeg';
import img2 from './../icons/Inmunolab/img_pruebas1.jpg';
import img3 from './../icons/Inmunolab/img_pruebas2.jpg';

const CustomSlide = ({ images, titles, texts, showTitle, showBack, order, imgBack }) => {

  const [image, setImage] = useState(images[0]);

  function changeImage(option) {
    setImage(images[option]);
  }

  const handleClick = (event) => {
    changeImage(event.target.id);
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
    const currentText = document.querySelectorAll("#t" + event.target.id);
    currentText.forEach(text => {
      text.classList.add("p-show");
    });
  }
  return (
    <>
      <div className="row services-row">
        {showTitle ? <h2 className='title-services animate__animated animate__fadeInLeft'>Servicios</h2> : ''}
        {showTitle ? <span className='line-services'></span> : ''}
        <div className={order ? 'col-md-5 mx-auto order-md-2' : 'col-md-5 mx-auto'}>
          <div className="card-body service-card">
            <img src={image} />
            <div className="buttons">
              <button id="0" className='btn active-b' onClick={handleClick}>{titles[0]}</button>
              <button id="1" className='btn' onClick={handleClick}>{titles[1]}</button>
            </div>
          </div>
        </div>
        <div className="col-md-5 mx-auto row-text-s animate__animated animate__fadeInLeft">
          <p className={order ? 'services-text p-show text-dark' : 'services-text p-show '} id='t0' >
            {texts[0]}
          </p>
          <p className={order ? 'services-text text-dark' : 'services-text'} id="t1">
            {texts[1]}
          </p>
          <span className='line-p'></span>
        </div>

        {showBack ? <img src={img1} className="img-back-s" /> : ''}
      </div>
    </>
  );



}


export default CustomSlide;
