import React from "react";
import {Link,useParams} from "react-router-dom"
const Navbar = () => {
    const {page}=useParams()
  return (
    <ul className="nav nav-tabs m-4">
      <li className={`nav-item nav-link ${!page && "active"}`}>
        <Link to="/"> Technology</Link>
      </li>
      <li className={`nav-item nav-link ${page==="Entertainment" && "active"}`}>
        <Link to="/Entertainment"> Entertainment</Link>
      </li>
      <li className={`nav-item nav-link ${page==="Sports" && "active"}`}>
        <Link to="/Sports"> Sports</Link>
      </li>
      <li className={`nav-item nav-link ${page==="Business" && "active"}`}>
        <Link to="/Business">Business</Link>
      </li>
      <li className={`nav-item nav-link ${page==="Health" && "active"}`}>
        <Link to="/Health">Health</Link>
      </li>
      <li className={`nav-item nav-link ${page==="Science" && "active"}`}>
        <Link to="/Science">Science</Link>
      </li>
    </ul>
  );
};

export default Navbar;
