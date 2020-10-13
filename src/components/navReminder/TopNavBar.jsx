import React from "react";
import { Link } from "@reach/router";

import "./TopNavBar.css";

export const HomeNav = () => (
  <div className="TopNavBar_Table_container">
   
          <div className="triangle-right" />
        
          <Link to="/" style={{ color: "#82cdbf" }}>
            首页
          </Link>
        
   
  </div>
);

export const OperatorsNav = () => (
  <div className="TopNavBar_Table_container">
  
          <div className="triangle-right" />
        
          <Link to="/" style={{ color: "#82cdbf" }}>
            首页
          </Link>
      
          <div className="triangle-right" />
      
          <Link to="/Operators" style={{ color: "#82cdbf" }}>
            人员
          </Link>
       
  </div>
);
