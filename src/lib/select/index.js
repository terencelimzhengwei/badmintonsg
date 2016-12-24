/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";

import "./index.css";
const Select = ({options,text}) => {
  return (
    <div className="select-container">
      <div className="label">{text}</div>
      <select id="date-select" class="date-select">
        {options.map((d,i)=>{
          <option
            className="date-option"
            value={d}
            >
            {d}
          </option>
        })}
      </select>
    </div>
  );
};

Select.defaultProps = {
  options: [],
  text:""
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  text:PropTypes.string
};

Select.displayName = "Select";

export default Select;


