import React from 'react'
import image1 from '../images/audi.png'
import image2 from "../images/bentley.webp"
import image3 from "../images/BMW.png"
import image4 from "../images/Chevrolet.png"
import image5 from "../images/ford.png"
import image6 from "../images/Hon.png"
import image7 from "../images/lambo.png"
import image8 from "../images/Mercedes.png"
import image9 from "../images/suzuki.webp"
import image10 from "../images/toyota.webp"
import image11 from "../images/wolkswagen.png"
import './partner.css'

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

const Partner = () => {
  return (
    <>
    <div className="partner">

        <div className="heading">
            <h1>
            OUR PARTNERSHIP WITH
            </h1>
        </div>

        
        <div className="logo">
          <div className="logo_slide">


          <img src={image1}  width={130} height={130} className='slide' alt="Loading...." />
          <img src={image2}  width={130} height={130} className='slide' alt="Loading...." />
          <img src={image3}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image4}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image5}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image6}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image7}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image8}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image9}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image10} width={130} height={130} className='slide' alt="Loading....." />
          <img src={image11} width={130} height={130} className='slide' alt="Loading....." />

          </div>

          <div className="logo_slide">


          <img src={image1}  width={130} height={130} className='slide' alt="Loading...." />
          <img src={image2}  width={130} height={130} className='slide' alt="Loading...." />
          <img src={image3}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image4}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image5}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image6}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image7}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image8}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image9}  width={130} height={130} className='slide' alt="Loading....." />
          <img src={image10} width={130} height={130} className='slide' alt="Loading....." />
          <img src={image11} width={130} height={130} className='slide' alt="Loading....." />

          </div>
          
        </div>
        
        
    </div>
    
    
    </>
  )
}

export default Partner