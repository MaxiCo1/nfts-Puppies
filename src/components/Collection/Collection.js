import React from "react";
import styles from "./collection.module.css";
import Marquee from "react-fast-marquee";
import CarouselImg from "../CarouselImg/CarouselImg";

import uno from "../../assets/carousel/1.png";
import dos from "../../assets/carousel/2.png";
import tres from "../../assets/carousel/3.png";
import cuatro from "../../assets/carousel/4.png";
import cinco from "../../assets/carousel/5.png";
import seis from "../../assets/carousel/6.png";
import siete from "../../assets/carousel/7.png";
import ocho from "../../assets/carousel/8.png";
import nueve from "../../assets/carousel/9.png";
import diez from "../../assets/carousel/10.png";

const data = [
  { src: uno, alt: "Doggie 01" },
  { src: dos, alt: "Doggie 02" },
  { src: tres, alt: "Doggie 03" },
  { src: cuatro, alt: "Doggie 04" },
  { src: cinco, alt: "Doggie 05" },
  { src: seis, alt: "Doggie 06" },
  { src: siete, alt: "Doggie 07" },
  { src: ocho, alt: "Doggie 08" },
  { src: nueve, alt: "Doggie 09" },
  { src: diez, alt: "Doggie 10" },
];

const Collection = () => {
  return (
    <div className={styles["contenedor"]}>
      <h1>Collection</h1>
      <Marquee gradient={false}>
        {data.map((item) => {
          return <CarouselImg src={item.src} alt={item.alt} />;
        })}
      </Marquee>
      <Marquee gradient={false} direction={"right"}>
        {data.map((item) => {
          return <CarouselImg src={item.src} alt={item.alt} />;
        })}
      </Marquee>
    </div>
  );
};

export default Collection;
