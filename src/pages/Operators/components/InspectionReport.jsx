import React from "react";

import "./InspectionReport.css";

export default function InspectionReport() {
  function handleExportThree(e) {
    e.preventDefault();
    console.log("Exporting InspectionReport data");
  }

  return (
    <div className="InspectionReport">
      <div className="InspectionReport_top">
        <span className="InspectionReport_title">巡检报告</span>
        <button onClick={handleExportThree} className="InspectionReport_export">
          <span>导出</span>
        </button>
      </div>
      <div className="InspectionReport_table">
        <p>Table : inspection DB from glass log</p>
      </div>
    </div>
  );
}
