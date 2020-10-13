import React from "react";

import "./InspectionReport.css";

//component
import ExportButton from "./ExportButton";

export default function InspectionReport() {
  function handleExportThree(e) {
    e.preventDefault();
    console.log("Exporting InspectionReport data");
  }

  return (
    <div className="InspectionReport">
      <div className="InspectionReport_top">
        <span className="InspectionReport_title">巡检报告</span>

        <ExportButton
          onClickButton={handleExportThree}
          button_style={"InspectionReport_export"}
        />
      </div>
      <div className="InspectionReport_table">
        <p>Table : inspection DB from glass log</p>
      </div>
    </div>
  );
}
