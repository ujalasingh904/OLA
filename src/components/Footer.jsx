import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import { BsInstagram ,BsFacebook,BsTwitter,BsLinkedin,BsWhatsapp } from 'react-icons/Bs';
import { FaMapMarkerAlt } from 'react-icons/Fa'; 
import {FaPhoneVolume} from 'react-icons/Fa'; 
import { MdOutlineEmail } from 'react-icons/Md';


const Footer = () => {
  return (
    <>
        <footer className="mera_footer">
            <div className="foot-list foot-list1" >
                <h2>Follow us on</h2>
                <a href="https://instagram.com"  target='blank'><BsInstagram className="icon icon1" /> Instagram</a>
                <a href="https://facebook.com" target='blank' ><BsFacebook className="icon icon2"/>Facebook</a>
                <a href="https://twitter.com"  target='blank'><BsTwitter className="icon icon3"/>Twitter</a>
                <a href="https://linkedin.com"  target='blank'><BsLinkedin className="icon icon4"/>Linkedin</a>
                <a href="https://whatsapp.com"  target='blank'><BsWhatsapp className="icon icon5"/>Whatsapp</a>
            </div>

            <div className="foot-list foot-list2">
                <h2>Contact Us</h2>

                <p>
                <FaMapMarkerAlt className="icon"/>
                   A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh - 201305
                </p>

                <p>
                    <MdOutlineEmail className="icon mail"/>
                    donibod508@eazenity.com
                </p>

                <p>
                    <FaPhoneVolume className="icon "/>
                    4578249942
                </p>

            </div>
            <div className="foot-list foot-list3">
                <h2>Explore</h2>
                 
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/services">Services</Link>
                <Link to="/know-more">Know more</Link>
                <Link to="/contact">Contact</Link>
                 
            </div>
            <div className="foot-list foot-list4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#29fd53" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>

                <p>Copyright © 2023 CarryOn. All rights reserved | Design by <b>Ujala Singh</b></p>
            </div>
        </footer>
    </>
  )
}

export default Footer