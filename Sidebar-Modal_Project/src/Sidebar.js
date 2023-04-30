import React, { useState } from "react";
import logo from "./logo.svg";
import { FaBars, FaTimes, Fabars } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  // const [showSidebar, setShowSidebar] = useState(false);
  // function toggleSidebar() {
  //   setShowSidebar(!showSidebar);
  // }
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const links_section = links.map((link) => {
    const { id, url, text, icon } = link;
    return (
      <li key={id}>
        <a src={url}>
          {icon} {text}
        </a>
      </li>
    );
  });

  const socialIcons_section = social.map((social_icon) => {
    const { id, url, icon } = social_icon;
    return (
      <li key={id}>
        <a src={url}>{icon}</a>
      </li>
    );
  });

  return (
    <div>
      <section
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} />
          <button className="close-btn" onClick={closeSidebar}>
            {" "}
            <FaTimes />
          </button>
        </div>
        <ul className="links">{links_section}</ul>
        <ul className="social-icons">{socialIcons_section}</ul>
      </section>
    </div>
  );
};

export default Sidebar;
