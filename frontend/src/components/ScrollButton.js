import React, {useState} from 'react';
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 60){
      setVisible(true)
    } 
    else if (scrolled <= 60){
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
        <BiUpArrowAlt color="#BBA14A" fontSize="1.5em"   />
    </button>
  );
}
  
export default ScrollButton;