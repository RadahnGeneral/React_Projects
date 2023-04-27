import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";

const Navbar = () => {
  const [linkArray, setLinkArray] = useState(links);
  const [icons, setIcons] = useState(social);
  const [showLink, setShowLink] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLink) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLink]);
  // const [windowWidth, setWindowWidth] = useState(0);

  const links_section = linkArray.map((link) => {
    const { id, url, text } = link;
    return (
      <li key={id}>
        <a href={url}>{text}</a>
      </li>
    );
  });

  const social_section = icons.map((social) => {
    const { id, url, icon } = social;
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    );
  });

  function toggleLinks() {
    setShowLink(!showLink);
  }

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       setWindowWidth(window.innerWidth);
  //       if (windowWidth >= 900) setShowLink(false);
  //     },
  //     []
  //   );
  // });
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links_section}
          </ul>
        </div>
        <div>
          <ul className="social-icons">{social_section}</ul>
        </div>
      </div>
      {/* {showLink && <ul className="links">{links_section}</ul>} */}
    </nav>
  );
};

export default Navbar;
