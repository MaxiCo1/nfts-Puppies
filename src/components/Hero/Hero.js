import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./hero.module.css";
import perritoHero from "../../assets/nft_hero.png";
import title_Hero from "../../assets/hero-titulo.png";

const hero = () => {
  return (
    <div className={styles["contenedor"]}>
      <Navbar />
      <div className={styles["contenedor-hero"]}>
        <img src={title_Hero} alt="" className={styles["titulo"]} />
        <h2>Discover and collect Doggies NFTs artwork</h2>
        <div>
          <button className={styles["btn"]}>Mint now</button>

        </div>
      </div>
    </div>
  );
};

export default hero;
