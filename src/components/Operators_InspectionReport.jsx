import React from "react";

import "./Operators_InspectionReport.css";

export default function Operators_InspectionReport() {
  function handleExportThree(e) {
    e.preventDefault();
    console.log("Exporting InspectionReport data");
  }

  return (
    <div className="Operators_InspectionReport">
      <div className="Operators_InspectionReport_top">
        <span className="Operators_InspectionReport_title">巡检报告</span>
        <div
          onClick={handleExportThree}
          className="Operators_InspectionReport_export"
        >
          <span>导出</span>
        </div>
      </div>
      <div className="Operators_InspectionReport_table">
        <p>Table</p>
      </div>
    </div>
  );
}
