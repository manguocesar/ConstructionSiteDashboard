import React from "react";

//style
import "./index.css";

//components
import SiteEmploymentInformation from "./components/SiteEmploymentInformation";
import SiteAccessInformation from "./components/SiteAccessInformation";
import InspectionReport from "./components/InspectionReport";

export default function Operators() {
  return (
    <div className="container_info_display_Operators">
      <SiteEmploymentInformation />
        <SiteAccessInformation />
        <InspectionReport />
    </div>
  );
}
