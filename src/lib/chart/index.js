/**
 * Created by terencelimzw on 24/12/16.
 */
import React from "react";

import "./index.css";

const ChartSVG = ({children}) => (
  <div style={{width:"60%"}}>
    <svg preserveAspectRatio={"xMaxYMax"} viewBox={"0 0 640 480"}>
      {children}
    </svg>
  </div>
)

export default ChartSVG