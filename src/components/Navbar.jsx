import React, { useState } from 'react' 
import { Link } from 'react-router-dom';
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/Rx";
import {RxCross1} from "react-icons/Rx"
const Navbar = () => {

  const [open, setOpen] = useState(false);
  
  const ToggleEvent = ()=>{
    setOpen(!open);
    if(open){
      document.getElementById('list').style.opacity = "0";
      // document.getElementById('list').style.transform = "translateX(500%)";
      
    }
    else{
      document.getElementById('list').style.opacity = "1";
      // document.getElementById('list').style.transform = "translateX(200%)";
    }
    
  }

  return (
    <>
       
      <div className="container">

                <Link to="/" className='Logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                  </svg>
                  <span id='pogo'>OLA</span>
                </Link>

                <ul id='list'>
                    <li><Link to="/" className='green'>Home</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Know more</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    
                </ul>

                  <div className="cred">
                    <Link to="/signin" className='user'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                          <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                          </svg>
                          Login
                    </Link>

                    <Link to="/register">
                      Register
                    </Link>

                   {open ? <RxCross1 className='cross' fontSize={30} onClick={ToggleEvent} id='menu-icon'/> : <RxHamburgerMenu fontSize={30} color="white" title='ham' id='menu-icon' onClick={ToggleEvent}/>}  
                   
                  </div>
                
      </div>
    </>
  )
}

export default Navbar