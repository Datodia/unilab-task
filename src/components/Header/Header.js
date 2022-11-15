import React from 'react'
import styles from './Header.module.css'

export const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>TO DO</h1>
            <div className={styles.user}>
                <h1 className={styles.name}>{localStorage.getItem("name")}</h1>
                <img src={props.img} />
            </div>
        </div>
    )
}
