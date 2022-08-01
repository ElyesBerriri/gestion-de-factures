import React, {useState} from 'react';
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className="scroll  " onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none'}}>
        <BiUpArrowAlt color="#00adb5" fontSize="1.5em"   />
    </button>
  );
}
  
export default ScrollButton;