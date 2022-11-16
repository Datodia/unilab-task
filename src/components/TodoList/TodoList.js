import React, { useEffect } from 'react'
import styles from './TodoList.module.css'
import * as uuid from 'uuid';
import useLocalStorage from '../../hooks/UseLocalStorage/useLocalStorage';

export const TodoList = () => {
    const [todoList, setTodoList] = useLocalStorage("todos", []);

    const addList = (e) => {
        e.preventDefault();
        const task = {
            id: uuid.v4(),
            taskName: e.target[0].value,
            completed: false
        };
        if (e.target[0].value !== "") {
            setTodoList([...todoList, task]);

        }
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
            <form onSubmit={addList} className={styles.task}>
                <input className={styles.input} placeholder="my task" />
                <input className={styles.submit} type="submit" value={'ADD'} />
            </form>

            <div className={styles.taskList}>
                {todoList.map((task) => {
                    return (
                        <div className={styles.tasks} style={{ background: task.completed ? "#61d885" : "black" }}>
                            <h1 className={styles.taskTitle}>{task.taskName}</h1>
                            <div className={styles.buttons}>
                                <button className={styles.accept} onClick={() => compeleTask(task.id)}><img src={process.env.PUBLIC_URL + '/assets/done.svg'} alt="" /></button>
                                <button className={styles.delete} onClick={() => deleteTask(task.id)}> <img src={process.env.PUBLIC_URL + '/assets/delete.svg'} alt="" /> </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

