import React from "react";
import WalletButton from "../WalletButton/WalletButton";
import styles from "./navbar.module.css";
//import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles["contenedor"]}>
      <h1>Doggies</h1>
      <ul>
        <li>
          <a href="#aboutUs">About Us</a>
        </li>
        <li>
          <a href="#collection">Collection</a>
        </li>
        <li>
          <a href="#mint">Mint</a>
        </li>
        <li>
          <a href="#FAQ">FAQ</a>
        </li>
      </ul>
      <WalletButton />
    </div>
  );
};

export default Navbar;
