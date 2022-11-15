import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = ({ img, name, setName, setImg }) => {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        setName("")
        setImg(null)
        navigate('/')

    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>TO DO</h1>
            <div className={styles.user}>
                <h1 className={styles.name}>{name}</h1>
                <img src={img} />
                <button className={styles.button} onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}
