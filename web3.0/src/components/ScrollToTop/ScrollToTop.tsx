import React,{useEffect} from 'react';
import {
    useLocation,
} from "react-router-dom";
import { debug } from 'request';

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
    //   window.scrollTo(0, c - c / 8);
      window.scrollTo(0, c - c / 1);
    }
  };

const ScrollToTop:React.FC = ({children})=>{
    const pathname = useLocation()
    useEffect(() => {
        scrollToTop();
    }, [pathname])
    
    return (
        <>{children}</>
    ) 
}
export default ScrollToTop;