/**
 * Created by terencelimzw on 24/12/16.
 */
/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";

import "./index.css";

const Card = ({children,title,width}) => (
  <div className="card" style={{width:width}}>
    <div style={{display: title ? 'auto' : 'none'}} className="header">
      <div className="title">{title}</div>
    </div>

    <div className="content">
      {children}
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string
}

export default Card

