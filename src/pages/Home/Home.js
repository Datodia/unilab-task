import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/sign')}>get started</button>
        </div>
    )
}
