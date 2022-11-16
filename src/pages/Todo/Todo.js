import React from 'react'
import { Header } from '../../components/Header/Header'
import { TodoList } from '../../components/TodoList/TodoList'
import styles from './Todo.module.css'

export const Todo = ({ img, name, setName, setImg, setLogedIn }) => {
    return (
        <div className={styles.wrapper}>
            <Header img={img} name={name} setName={setName} setImg={setImg} setLogedIn={setLogedIn} />
            <TodoList />
        </div>
    )
}
