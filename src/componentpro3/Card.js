import React from 'react';
import logo from './images/download.png';
const Card = ({item,isOpen}) => {
    return (

            <div className='image_one3'>
              <img src={item.carImg} alt="hotel" className="img_card3"/>
              <p className='star3'><img src={logo} alt="logo" width='18px'/>{item.stats.rating} <span>{item.stats.reviewCount}-{item.location}</span></p>
              <p className='para3'>{item.title}</p>
              <p className='cost_style3'>from ${item.price} <span>/person</span></p>
              <div className="button_style3">{isOpen}</div>
            </div>


    );
}

export default Card;