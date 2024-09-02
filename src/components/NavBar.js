import React, { useState } from "react";
import "./css/NavBar.css";

const NavBar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true)
    }

    const hideSidebar = () => {
        setSidebarVisible(false)
    }

  return (
    <nav>
      <ul className={`sidebar ${sidebarVisible ? "visible" : ""}`} onClick={hideSidebar}>
        <li>
          <a href="#svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#home">Daniel</a>
        </li>
        <li className="hideOnMobile">
          <a href="#home">Home</a>
        </li>
        <li className="hideOnMobile">
          <a href="#about-me">About Me</a>
        </li>
        <li className="hideOnMobile">
          <a href="#projects">Projects</a>
        </li>
        <li className="hideOnMobile">
          <a href="#contact">Contact</a>
        </li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
