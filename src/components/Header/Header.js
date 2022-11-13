import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>TO DO</h1>
            <div className={styles.user}>
                <h1 className={styles.name}>{localStorage.getItem("userName")}</h1>
                <img src={localStorage.getItem('fileBase64')} />
            </div>
        </div>
    )
}
