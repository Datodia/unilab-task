import React from 'react'
import { Header } from '../../components/Header/Header'
import { TodoList } from '../../components/TodoList/TodoList'
import styles from './Todo.module.css'

export const Todo = ({ img, name }) => {
    return (
        <div className={styles.wrapper}>
            <Header img={img} name={name} />
            <TodoList />
        </div>
    )
}
