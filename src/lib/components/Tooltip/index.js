import React, {PropTypes} from "react";

import "./index.css"

const Tooltip = ({show,x,y,message}) => {
  const classes = show ? "tooltip show" : "tooltip";
  return(
    <div className={classes} style={{
      top: y,
      left: x
    }}>
      <div className="tooltip-message">{message}</div>
    </div>
  )
}

Tooltip.propTypes = {
  show: PropTypes.bool,
  x:PropTypes.number,
  y:PropTypes.number,
  message:PropTypes.string
}

export default Tooltip

