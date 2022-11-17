import React from "react";
import styles from "./carouselImg.module.css";

const CarouselImg = ({ src, alt }) => {
  return (
    <div className={`${styles["image"]}`}>
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
};

export default CarouselImg;
