import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <img src='assets/bag.svg' />
            <h1 className={styles.title}>Keep Track Of Daily Tasks In Life</h1>
            <button className={styles.button} onClick={() => navigate('/sign')}>Get Started</button>
        </div>
    )
}
