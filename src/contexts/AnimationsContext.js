import React, { createContext, useState } from "react";

export const AnimationsContext = createContext();


const AnimationsContextProvider = (props) => {
   
    const buttonVariants = {
        hover: {
          scale: 1.05,  
          textShadow: "0px 0px 2px ",
           boxShadow: "0px 0px 2px",
          transition: {
            yoyo:Infinity,
            duration: 0.5
              } }  }



  
    return (
      <AnimationsContext.Provider value={{ buttonVariants }}>
        {props.children}
      </AnimationsContext.Provider>
    );
  };
  
  export default AnimationsContextProvider;
  