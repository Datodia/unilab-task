import React, { useState } from 'react'
import styles from './Sign.module.css'
import { useNavigate } from 'react-router-dom'

export const Sign = () => {
    const navigate = useNavigate()
    const [go, setGo] = useState(false)

    const handleClick = () => {
        if (go) {
            return navigate("/todo")
        }
    }
    const handleChange = () => {
        setGo(true)
    }

    return (
        <div>
            <h1>Sign Page</h1>
            <button onClick={handleClick}>Sign up</button>
            <button onClick={handleChange}>Sign up</button>
        </div>
    )
}
