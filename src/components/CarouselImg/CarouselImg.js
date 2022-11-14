import React from "react";
import styles from "./carouselImg.module.css";

const CarouselImg = ({ src, alt }) => {
  return (
    <div className={`${styles["image"]}`}>
      <img src={src} alt={alt} />
      <h3>{alt}</h3>
    </div>
  );
};

export default CarouselImg;
