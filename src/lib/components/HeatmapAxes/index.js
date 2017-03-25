/**
 * Created by terencelimzw on 24/12/16.
 */

import React, {PropTypes} from "react";


import "./index.css";

const Axis = ({gridSize,data,position,num_columns}) => {
  var transform = (position==="right")?"translate(-6,"+gridSize/1.5+")":"translate(11,"+gridSize/1.5+")"
  return(
    <g>
      {data.map((d,i)=>(
        <g key={i} transform="translate(0,30)">
          <text
            className={"venueLabel"}
            x={(position==="right")?num_columns*gridSize+11:i*(gridSize)}
            y={(position==="right")?i*(gridSize):-gridSize}
            textAnchor={(position==="right")?"right":"middle"}
            transform={transform}
          >
            {d}
          </text>
        </g>
      ))}
    </g>
  )
}

Axis.propTypes = {
  gridSize: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.string),
  position:PropTypes.string,
  num_columns:PropTypes.number
}

export default Axis

