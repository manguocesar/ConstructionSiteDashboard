import React, { useRef, useEffect, useState } from "react";

import {
  select,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleBand,
  line,
  curveCardinal,
} from "d3";

function BarChart() {
  const [dataOne, setDataOne] = useState([265, 220, 210, 150]);
  const [dataTwo, setDataTwo] = useState([245, 240, 220, 210]);
  const [dataThree, setDataThree] = useState([
    115,
    290,
    180,
    210,
    315,
    140,
    220,
    210,
  ]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(dataOne.map((value, index) => index))
      .range([0, 350])
      .padding(0.7);
    const xScaleLine = scaleBand()
      .domain(dataThree.map((value, index) => index))
      .range([0, 220])
      .padding(2);

    const yScale = scaleLinear().domain([0, 350]).range([130, 0]);

    const colorScale = scaleLinear()
      .domain([120, 190, 340])
      .range(["white", "#65AE9D", "#10A583"])
      .clamp(false);

    const xAxis = axisBottom(xScale).ticks(dataOne.length);

    svg
      .select(".x-axis")
      .style("transform", "translate(20px, 150px)")
      .call(xAxis);

    const yAxis = axisLeft(yScale).ticks(3);
    svg
      .select(".y-axis")
      .style("transform", "translate(26px, 20px)")
      .attr("stroke", "grey")
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(dataOne)
      .join("rect")
      .attr("class", "barOne")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index) + 8)
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 100 - yScale(value));

    svg
      .selectAll(".bar")
      .data(dataTwo)
      .join("rect")
      .attr("class", "barTwo")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index) + 32)
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 60 - yScale(value));

    const myLine = line()
      .x((value, index) => xScaleLine(index)) //scale the value
      .y((value) => yScale(value)) //scale the value
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([dataThree])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine) //or value => myLine(value)
      .attr("fill", "none")
      .attr("stroke", "#82CDBF") //"#00CD98
      .attr("stroke-width", "2")
      .style("transform", "translate(10px, 0px)");
  }, [dataOne]);

  return (
    <React.Fragment>
      <svg
        ref={svgRef}
        style={{
          //  border: "solid red 1px",
          height: "100%",
          width: "100%",
        }}
      >
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </React.Fragment>
  );
}

export default BarChart;
