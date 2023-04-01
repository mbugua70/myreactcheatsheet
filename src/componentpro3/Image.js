import React from "react";
import image1 from './images/one.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';

const Image = () => {
    return (
        <div className="img_el_airbnb">
            <img src={image1} alt="hotel" className="img1" />
            <img src={image2} alt="hotel" className="img2" />
            <img src={image3} alt="hotel" className="img3" />
            <img src={image4} alt="hotel" className="img4" />
            <img src={image5} alt="hotel" className="img5" />
            <img src={image6} alt="hotel" className="img6" />
            <img src={image7} alt="hotel" className="img7" />
            <img src={image8} alt="hotel" className="img8" />
            <img src={image9} alt="hotel" className="img9" />

        </div>
    );
}

export default Image;