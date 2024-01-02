import React from 'react'
import image from '../images/scooter.png'
import './center2.css'
import { Fade } from "react-awesome-reveal"
const Center2 =() => {
  return (
      <>
      <Fade>
        <div className="cent" >
           <div className="cent2">
            
            <h1>Why To Choose OLA Scooter</h1>
            <br />
            
            <ul className='advantages'>
           <li><span>Environmentally Friendly</span> : Electric scooters produce zero tailpipe emissions, making them a greener and more eco-friendly mode of transportation</li>
           <li><span>Lower Operating Costs</span> : Electric scooters are more cost-effective to operate than their gas counterparts, as electricity is generally cheaper than gasoline, and maintenance costs tend to be lower.</li>
           <li><span>Quiet and Smooth</span> : Electric scooters are quieter and provide a smoother ride compared to internal combustion engine scooters, which can contribute to a more pleasant and peaceful urban environment.</li>
           <li><span>Zero Fuel Costs</span> : You don't need to buy gasoline for electric scooters, saving you money on fuel. Charging them is usually less expensive.</li>
           <li><span>Zero Emissions</span> : Ola scooters contribute to reducing air pollution and greenhouse gas emissions.</li>
           </ul>

            <button className="btn">
                Book now →
            </button>
            </div>
            <div className="cent1">
                <img src={image} alt="loading" /> 
            </div>

        </div>
    </Fade>
    </>
  )
}

export default Center2;