import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>FALCON 9</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>FALCON HEAVY</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>DRAGON</h2>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="#">
          <h2>STARSHIP</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
