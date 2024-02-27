import { useState } from "react";
import img1 from './../icons/Inmunolab/observador.jpeg';
import img2 from './../icons/Inmunolab/img_pruebas1.jpg';
import img3 from './../icons/Inmunolab/img_pruebas2.jpg';

const CustomSlide = ({ title, images, titles, texts, showTitle, showBack, order, imgBack, Ids }) => {

  const [image, setImage] = useState(images[Ids[0]]);
  const [idShow, setIdShow] = useState(Ids[0]);

  function changeImage(option) {
    setImage(images[option]);
  }

  const handleClick = (_id) => {
    changeImage(_id);
    setIdShow(_id);
  }
  return (
    <>
      <div className="row services-row">
        {showTitle ? <h2 className='title-services animate__animated animate__fadeInLeft'>{title}</h2> : ''}
        {showTitle ? <span className='line-services'></span> : ''}
        <div className={order ? 'col-md-5 mx-auto order-md-2' : 'col-md-5 mx-auto'}>
          <div className="card-body service-card">
            <img src={image} style={{ objectFit: 'contain' }} />
            <div className="buttons">
              {
                Ids.map((item, index) => (<button key={'bt' + item} id={Ids[item]} className={item == idShow ? 'btn active-b' : 'btn'} onClick={() => handleClick(item)}>{titles[index]}</button>))
              }
            </div>
          </div>
        </div>
        <div className="col-md-5 mx-auto row-text-s animate__animated animate__fadeInLeft">
          <p key={'p' + 1} className={order ? 'services-text p-show text-dark' : 'services-text'} style={{ display: 'block' }}>
            {texts[idShow % 2 == 0 || idShow == 0 ? 0 : 1]}
          </p>

          <span className='line-p'></span>
        </div>

        {showBack ? <img src={imgBack ? imgBack : img1} className="img-back-s" /> : ''}
      </div>
    </>
  );



}


export default CustomSlide;
