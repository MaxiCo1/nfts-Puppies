import React from "react";
import WalletButton from "../WalletButton/WalletButton";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["contenedor"]}>
      <h1>Doggies</h1>
      <ul>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Collection</a>
        </li>
        <li>
          <a>Mint</a>
        </li>
        <li>
          <a>Roadmap</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <WalletButton />
    </div>
  );
};

export default Navbar;
