import "./backtop.css";
import { BsArrowUpShort } from "react-icons/Bs";
import React, { useState } from "react";

const BacktoTop = () => {
  const [dis, setdis] = useState(false);
  var viewportWidth = window.innerWidth;
  console.log(viewportWidth);
  const JumpToTop=()=>{
      const currentposition = document.documentElement.scrollTop || document.body.scrollTop;
      if(currentposition>0){
         window.requestAnimationFrame(JumpToTop);
         window.scrollTo(0,currentposition-currentposition/20);
      } 
    }

  const scrollToTop = () => {
    if (window.pageYOffset > 600) {
      setdis(true);
    } else {
      setdis(false);
    }
  };
  window.addEventListener("scroll", scrollToTop);

  return (
    <>
      {viewportWidth <= "920" && dis ? (
        <div className="arrow" onClick={() => window.scrollTo(0, 0)}>
          <BsArrowUpShort className="real_arrow" />
        </div>) : (dis? (<div className='arrow' onClick={JumpToTop}>
                  <BsArrowUpShort className='real_arrow'/>
                </div>):"") }

      {/* {dis ?<div className='arrow' onClick={()=>{window.scrollTo(0,0)}}>
      <BsArrowUpShort className='real_arrow'/>
    </div> :""} */}
    </>
  );
};

export default BacktoTop;
