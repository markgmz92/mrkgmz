import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>HOME</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>ABOUT</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>PORTFOLIO</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>BLOG</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>CONTACT</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
