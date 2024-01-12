import React from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <div className="nav_left">PhotOgenic</div>

        <div className="nav_mid">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Blog Posts</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Blog Single</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">404 Page</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Email Template
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Landing Page</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">Shortcodes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav_right">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
