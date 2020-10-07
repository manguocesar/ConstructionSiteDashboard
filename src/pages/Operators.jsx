import React from "react";

//style
import "./Operators.css";

//components
import Operators_SiteEmploymentInformation from "../components/Operators_SiteEmploymentInformation";
import Operators_SiteAccessInformation from "../components/Operators_SiteAccessInformation";
import Operators_InspectionReport from "../components/Operators_InspectionReport";

export default function Operators() {
  return (
    <div className="container_info_display_Operators">
      <Operators_SiteEmploymentInformation />
      <div className="container_bottom_Operators">
        <Operators_SiteAccessInformation />
        <Operators_InspectionReport />
      </div>
    </div>
  );
}
