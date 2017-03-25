/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";

import "./index.css";

const Select = ({options,text,onChange,value}) => {
  return (
    <div className="select-container">
      <div className="label">{text}</div>
      <select id="date-select"
              className="date-select"
              onChange={onChange}
              value={value}
      >
        {options.map((d,i)=>(
          <option
            className="date-option"
            value={d}
            key={i}
            >
            {d}
          </option>
        ))}
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
  text:PropTypes.string,
  onChange:PropTypes.func,
  value:PropTypes.string
};

Select.displayName = "Select";

export default Select;


