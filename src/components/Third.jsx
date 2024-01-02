import React from 'react'
import image from '../images/scooty.png'
import './third.css'

const Third = () => {
  return (
    <>
    <div className="name">
        <div className="name1">
          <img src={image} alt="Loading...." />
        </div>
        <div className="name2">
            <h1>Main Features Of OLA Scooter</h1>
            <br />
            <ul className='features'>
           <li><span>Electric-Powered</span> : Ola scooters are expected to be fully electric, which makes them eco-friendly and reduces carbon emissions.</li>
           <li><span>Long Range</span> : Many electric scooters provide a decent range on a single charge, allowing for longer rides and commutes.</li>
           <li><span>Quick Acceleration</span> : Electric scooters typically offer instant torque, providing fast and smooth acceleration.</li>
           <li><span>Government Incentives</span> :  Depending on your location, you may be eligible for government incentives or subsidies for electric vehicle adoption.</li>
           <li><span>Safety Features</span> : Ola scooters may include safety features such as advanced braking systems, lights, and rider assistance.</li>
           <li><span>Modern Styling</span> : Electric scooters are often designed with a modern and stylish look.</li>
           </ul>
           <button className="btn">
                Book now →
            </button>
        </div>
    </div>

    </>
  )
}

export default Third