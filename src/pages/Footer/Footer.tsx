import React from "react"
import styles from "./Footer.module.css"

const Footer: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return <div className={styles.general}>
    <div className="container">
      <div>{children}</div>
      <div className={styles.text}>Copyright © Typical<span className={styles.blue}>Network</span>. All Rights Reserved.
      </div>
    </div>
  </div>
}

export default Footer