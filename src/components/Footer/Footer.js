import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className={styles["contenedor"]}>
      <p>Copyright© Doggies 2022. All rights reserved</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faDiscord} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
