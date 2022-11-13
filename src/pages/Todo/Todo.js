import React from 'react'
import { Header } from '../../components/Header/Header'
import { TodoList } from '../../components/TodoList/TodoList'
import styles from './Todo.module.css'

export const Todo = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <TodoList />
        </div>
    )
}
