import React from "react";

export default function ExportButton(props) {
  const { onClickButton, button_style } = props;

  return (
    <button onClick={onClickButton} className={button_style}>
      <span style={{ margin: "0% auto" }}>导出</span>
    </button>
  );
}
