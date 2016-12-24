/**
 * Created by terencelimzw on 24/12/16.
 */
import React from "react";

import "./index.css";

const ChartSVG = ({children,width,height}) => (
  <div style={{width:"100%"}}>
    <svg preserveAspectRatio={"xMidYMid meet"} viewBox={"0 0 "+(width*1.7)+" "+(height+30)}>
      {children}
    </svg>
  </div>
)

export default ChartSVG