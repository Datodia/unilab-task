import React from 'react'
import styles from './TodoList.module.css'

import { useState } from "react";

export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

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
    };

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
            <div>
                {todoList.map((task) => {
                    return (
                        <div className={styles.tasks} style={{ background: task.completed ? "green" : "red" }}>
                            <h1>{task.taskName}</h1>
                            <div className={styles.buttons}>
                                <button onClick={() => compeleTask(task.id)}>Completed</button>
                                <button onClick={() => deleteTask(task.id)}> X </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

