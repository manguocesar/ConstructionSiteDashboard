import React from "react";
import { Button } from "antd";

import "./GridView.css";

function GridView(props) {
  const { children } = props;
  return (
    <div className="gridview-outer-container">
      <div className="gridview-container">{children}</div>
    </div>
  );
}

function Cell(props) {
  const {
    title,
    children,
    top,
    left,
    right,
    bottom,
    width,
    height,
    action,
    noBodyStyle = false,
    titleAlignCenter = false,
  } = props;
  return (
    <div
      className="gridview-cell"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
      }}
    >
      <div
        className="gridview-cell-header"
        style={{
          justifyContent: titleAlignCenter ? "center" : "flex-start",
        }}
      >
        {!!title && title}
        {!!action && (
          <div className="gridview-cell-header-action">
            <Button
              onClick={action.onClick}
              size="small"
              type="primary"
              ghost={true}
            >
              {action.label}
            </Button>
          </div>
        )}
      </div>
      {noBodyStyle ? (
        children
      ) : (
        <div className={"gridview-cell-body"}>{children}</div>
      )}
    </div>
  );
}

function Body(props) {
  const { title, children, style, className = "" } = props;
  return (
    <div className={"gridview-body " + className} style={style}>
      <div className="gridview-body-title">
        {title}
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
      }}>{children}</div>
    </div>
  );
}

GridView.Cell = Cell;
GridView.Body = Body;
export default GridView;
