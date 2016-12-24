/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";

import "./index.css";
const Navbar = ({title,links}) => {

  return (
    <div className="navbar">
      {title}
    </div>
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


