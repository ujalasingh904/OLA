import React from "react";
import Navbar from "./Navbar";
import img1 from "../images/person.png";
import img2 from "../images/email.png";
import img3 from "../images/password.png";

const Signin = () => {
  return (
    <div>
      <Navbar />

    <div className="new_div">
        <div className="containe">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {/* <div className="input">
                    <img src={img1} alt="Loading"  />
                    <input type="text"placeholder='Name' />
                </div> */}

            <div className="input">
              <img src={img2} alt="Loading" />
              <input type="email" placeholder="Email id" />
            </div>
            <div className="input">
              <img src={img3} alt="Loading" />
              <input type="password" placeholder="Password" />
            </div>
          </div>

          <div className="forget-password" style={{ marginTop: "2.5rem" }}>
            <div className="for-get">

                Forget password? <span>Click here</span>
            </div>
          </div>

          <div className="submit-btn">
            <div className="submit">Login</div>
            {/* <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setaction("Login")}}>Login</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
