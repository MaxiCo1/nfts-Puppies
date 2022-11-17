import React from "react";
import styles from "./aboutus.module.css";
import teamImg from "../../assets/aboutUsimg.png";

const AboutUs = () => {
  return (
    <div className={styles["contenedor"]} id="aboutUs">
      <h1>About Us</h1>
      <img src={teamImg} alt=""></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis
        semper nisl ut tristique. Proin ornare suscipit mauris quis dapibus.
        Etiam sed lorem ac sem tempus luctus pellentesque vitae diam. Integer
        finibus ut massa in congue. Maecenas vitae nisi lorem. Cras augue lorem,
        sagittis non mi quis, varius facilisis arcu. Proin erat orci, maximus
        nec erat in, suscipit blandit tortor.
      </p>
    </div>
  );
};

export default AboutUs;
