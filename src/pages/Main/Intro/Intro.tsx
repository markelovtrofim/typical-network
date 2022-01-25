import React from "react"
import styles from "./Intro.module.css"
import {Link} from "react-scroll"

export const Intro = () => {
  return <div className={styles.general}>
    <div className="container">
      <div className={styles.inner}>
        <h1>Typical network</h1>
        <p>- социальная сеть представляющаю большинство функций из самых популярных социальных сетей этого мира.</p>
        <Link className={styles.button} to='func' spy={true} smooth={true} duration={1000} offset={-70}>
          Узнать больше
        </Link>
      </div>
    </div>
  </div>
}