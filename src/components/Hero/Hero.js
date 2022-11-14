import React from 'react'
import styles from './hero.module.css'
import perritoHero from '../../assets/perritoHero.png'

const hero = () => {
  return (
    <div className={styles["contenedor"]}>
      <div>
        <h1>Welcome to the Dog Park</h1>
        <h2>Discover and collect Doggies NFTs artwork</h2>
        <p>267/1000 minted</p>
        <button className={styles["btn"]}>Mint now</button>
      </div>
        <img src={perritoHero} alt=''></img>
    </div>
  )
}

export default hero