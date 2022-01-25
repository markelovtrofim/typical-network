import React from "react"
import styles from "./Features.module.css"
import {FuncItem} from "./FuncItem/FeaturesItem"
import {useSelector} from "react-redux"

export const Features: React.FC = () => {
    const state = useSelector((state: any) => ({
        func: state.func.func,
        userId: state.auth.id,
        num: state.func.num
    }))
    return <div id="func" className={styles.general}>
        <div className="container">
            <div className={styles.title_box}>
                <span className={styles.title}>Функции</span>
                <div className={styles.title_text_box}><span className={styles.title_text}>Основные фукции нашей социальной сети.</span></div>
            </div>
            <div className={styles.inner}>
                {state.func.map((f: any) => <FuncItem key={f.id} userId={state.userId} num={state.num} itemTitle={f.itemTitle} itemText={f.itemText} img={f.img} path={f.path}/>)}
            </div>
        </div>
    </div>
}