/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";
import * as d3 from 'd3';
import "./index.css";

const HeatMap = ({gridSize,stroke,strokeOpacity,colorRange,data,onMouseOver,onMouseOut}) => {
  const raw_data = data.length>0?data.map(d=>d.avail):[]
  var domain = [0,(raw_data?d3.max(raw_data.map(d=>d3.max(d))):0)]
  var colorScale = d3.scaleLinear().range(colorRange).domain(domain)
  return (
      <g className={"heatmap"}>
        {data.map((d, i) => {
            return (
              d.avail.map((a, b) => (
                <g key={i.toString() + "," + b.toString()} transform="translate(0,30)">
                  <a xlinkHref={d.url} target="_blank">
                    <rect
                      width={gridSize}
                      height={gridSize}
                      stroke={stroke}
                      strokeOpacity={strokeOpacity}
                      fill={colorScale(a)}
                      x={b * gridSize}
                      y={i * gridSize}
                      value={a}
                      onMouseOver={onMouseOver}
                      onMouseOut={onMouseOut}
                    />
                  </a>
                </g>
              ))
            )
          }
        )}
      </g>
  );
};

HeatMap.defaultProps = {
  gridSize:30,
  stroke:"white",
  strokeOpacity:0.6,
  colorRange:["#efefef", "#394448", "#231f20"],
  data: []
};

HeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  gridSize : PropTypes.number,
  stroke: PropTypes.string,
  strokeOpacity: PropTypes.number,
  colorRange: PropTypes.arrayOf(PropTypes.string),
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  url:PropTypes.string
};

HeatMap.displayName = "HeatMap";

export default HeatMap;
