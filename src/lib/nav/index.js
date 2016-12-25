/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";

import "./index.css";
import "../../fonts/font.css"

const Navbar = ({title,links}) => {

  return (
    <a
      href="https://www.linkedin.com/in/terencelimzw"
      style={{textDecoration:"none"}}
      target="_blank"
    >
      <div className="navbar">
        {title}
      </div>
    </a>
  );
};

Navbar.defaultProps = {
  title: "My Scatterplot",
  links: []
};

Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
};

Navbar.displayName = "Navbar";

export default Navbar;


