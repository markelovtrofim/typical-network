import React from "react"
import styles from "./Burger.module.css"

const Burger = () => {
    const BurgerClick = () => {
        alert('Бургер пока не палит. Для перехода на другую страницу воспользуйся ссылками на главной)')
    }
    return (
        <div onClick={BurgerClick} className={styles.nav_toggle}>
            <span className={styles.nav_toggle_item}>
            </span>
        </div>
    )
}

export default Burger