/**
 * Created by terencelimzw on 24/12/16.
 */
import React, {PropTypes} from "react";
import {Link} from "react-router";

import "./index.css";
import "../../fonts/font.css"

const Navbar = ({title,links}) => {

  return (
      <div className="navbar">
        <a
          href="https://www.linkedin.com/in/terencelimzw"
          target="_blank"
        >
        {title}
        </a>
        {links.map((d,i)=>(
            <Link
              to={d.link}
              activeStyle={{color:"#eccc48"}}
              style={{color:"white",textDecoration:"none",margin:"0px 10px 0px 10px",transition:"0.5s",float:"right"}}
              key={i}
            >
              {d.name}
            </Link>
        ))}
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


