import React, { useRef, useEffect } from "react";
import { select, arc, pie, interpolate } from "d3";
import useResizeObserver from "./useResizeObserver";

import legendColor from "./legendColor.png";

export default function PieChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const arcGenerator = arc().innerRadius(30).outerRadius(55);

    const pieGenerator = pie()
      .startAngle(-1 * Math.PI)
      .endAngle(1 * Math.PI)
      .sort(null);

    const instructions = pieGenerator(data);

    svg
      .selectAll(".slice")
      .data(instructions)
      .join("path")
      .attr("class", "slice")
      .attr("fill", (instruction, index) =>
        index === 0
          ? "#82cdbf"
          : index === 1
          ? "#B4FDEC"
          : index === 2
          ? "#65AE9D"
          : index === 3
          ? "#10A583"
          : index === 4
          ? "#C7E6DF"
          : "#eee"
      )
      .style(
        "transform",
        `translate(${dimensions.width / 4.2}px, ${dimensions.height * 0.4}px)`
      )
      .transition()
      .attrTween("d", function (nextInstruction, index) {
        // bonus, which wasn't in video 07:
        // animate chart initially, but setting initial instruction
        const initialInstruction = pieGenerator([-1, 1])[index];
        const interpolator = interpolate(
          this.lastInstruction || initialInstruction,
          nextInstruction
        );
        this.lastInstruction = interpolator(1);
        return function (t) {
          return arcGenerator(interpolator(t));
        };
      });

    // draw the gauge
  }, [data, dimensions]);

  return (
    <div>
      <div
        ref={wrapperRef}
        style={{ display: "flex", border: "1px solid blue", height: "10%" }}
      >
        <svg ref={svgRef}></svg>
        <div style={{ margin: "20px 30px 0px 0px" }}>
          <img alt="" src={legendColor} />
        </div>
        {/* {data[0].toFixed(2)}, {data[1].toFixed(2)} */}
      </div>
    </div>
  );
}
