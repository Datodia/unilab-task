import React, { useEffect } from 'react'
import styles from './TodoList.module.css'
import * as uuid from 'uuid';
import { useState } from "react";
import useLocalStorage from '../../hooks/UseLocalStorage/useLocalStorage';

export const TodoList = () => {
    const [todoList, setTodoList] = useLocalStorage("todos", []);
    const [newTask, setNewTask] = useState("");


    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addList = () => {
        const task = {
            id: uuid.v4(),
            taskName: newTask,
            completed: false
        };
        if (newTask !== "") {
            setTodoList([...todoList, task]);

        }
    };


    const handlePress = (event) => {
        if (event.key === 'Enter') {
            const task = {
                id: uuid.v4(),
                taskName: newTask,
                completed: false
            };
            if (newTask !== "") {
                setTodoList([...todoList, task]);

            }
        }
    }


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
                <input className={styles.input} onChange={handleChange} onKeyPress={handlePress} placeholder="my task" />
                <button className={styles.button} onClick={addList}>ADD</button>
            </div>

            <div className={styles.taskList}>
                {todoList.map((task) => {
                    return (
                        <div className={styles.tasks} style={{ background: task.completed ? "#61d885" : "black" }}>
                            <h1 className={styles.taskTitle}>{task.taskName}</h1>
                            <div className={styles.buttons}>
                                <button className={styles.accept} onClick={() => compeleTask(task.id)}><img src={process.env.PUBLIC_URL + '/assets/done.svg'} /></button>
                                <button className={styles.delete} onClick={() => deleteTask(task.id)}> <img src={process.env.PUBLIC_URL + '/assets/delete.svg'} /> </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

