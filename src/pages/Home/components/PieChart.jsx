import React, { useRef, useEffect } from "react";
import { select, arc, pie, interpolate } from "d3";
import useResizeObserver from "./useResizeObserver";

import legendColor from "./img/legendColor.png";

//style
import "./PieChart.css";

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
    console.log(instructions, dimensions);

    svg
      .selectAll(".slice")
      .data(instructions)
      .join("path")
      .attr("class", "slice")

      .attr("fill", (instruction, index) =>
        index === 0
          ? "#10A583"
          : index === 1
          ? "#65AE9D"
          : index === 2
          ? "#82cdbf"
          : index === 3
          ? "#B4FDEC"
          : "#C7E6DF"
      )
      .style(
        "transform",
        `translate(${dimensions.width / 4.2}px, ${dimensions.height * 0.4}px)`
      )
      .transition()
      .attrTween("d", function (nextInstruction, index) {
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

    // svg //text
    //   .selectAll(".label")
    //   .data(data)
    //   .join("text")
    //   .text((data) => `${data}`)
    //   .attr("class", "label")
    //   .attr("fill", "black")
    //   .attr("font-size", "12px")
    //   .attr("x", (index) => index * 200)
    //   .transition()
    //   .attr("y", (index) => index * 300);
  }, [data, dimensions]);

  return (
    <div>
      <div ref={wrapperRef} className="Container_PieChart">
        <svg ref={svgRef}></svg>
        <div className="Container_PieChart_Legend">
          <img alt="" src={legendColor} />
        </div>
        {/* {data[0].toFixed(2)}, {data[1].toFixed(2)} */}
      </div>
    </div>
  );
}
