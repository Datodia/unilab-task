import React, { useEffect } from 'react'
import styles from './TodoList.module.css'

import { useState } from "react";

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [test, setTest] = useState([])

    const handleChange = (event) => {
        setNewTask(event.target.value);

    };

    const addList = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        };
        setTodoList([...todoList, task]);
        localStorage.setItem("todos", JSON.stringify(todoList))
    };

    // useEffect(() => {
    //     localStorage.getItem("todos")
    //     console.log(test)
    // }, [setTest])

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    };
    const compeleTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        );
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Add Your Daily Tasks</h1>
            <div className={styles.task}>
                <input className={styles.input} onChange={handleChange} placeholder="my task" />
                <button className={styles.button} onClick={addList}>ADD</button>
            </div>
            <div className={styles.taskList}>
                {todoList.map((task) => {
                    return (
                        <div className={styles.tasks} style={{ background: task.completed ? "#61d885" : "black" }}>
                            <h1 className={styles.taskTitle}>{task.taskName}</h1>
                            {/* <h1 style={{ color: 'white' }}>{localStorage.getItem('todos')}</h1> */}
                            <div className={styles.buttons}>
                                <button className={styles.accept} onClick={() => compeleTask(task.id)}><img src='assets/done.svg' /></button>
                                <button className={styles.delete} onClick={() => deleteTask(task.id)}> <img src='assets/delete.svg' /> </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

