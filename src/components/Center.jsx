import React from 'react'
import './center.css'
import image from '../images/moto.png'

const Center = () => {
    
  return (
    <>
    <div className="center">
        <div className="center1">
            <img src={image} alt="loading" /> 
        </div>

        <div className="center2">
            <h1>Book your OLA Scooter Now</h1>
            <br />
            <p id='para'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni amet repudiandae, eaque illo recusandae exercitationem neque ut, accusantium nemo dignissimos, ex veritatis blanditiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Maiores accusantium dolorum natus incidunt inventore doloribus quia distinctio, iusto, facere voluptatibus omnis placeat numquam fugiat ad debitis, possimus laborum sapiente sint asperiores?
              Lorem ipsum dolor sit
              <br />
              <br />
              Maiores accusantium dolorum natus incidunt inventore doloribus quia distinctio, iusto, facere voluptatibus omnis placeat numquam fugiat ad debitis, possimus laborum sapiente sint asperiores?
            </p>
            <button className="btn">
                Book now →
            </button>  
        </div>

    </div>
    </>
  )
}

export default Center