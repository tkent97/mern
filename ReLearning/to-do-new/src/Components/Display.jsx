import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

const Display = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todoItems = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        setTodos(todoItems)
    }, [])
    const addTodo = (task) => {
        const newTask = {
            id: uuidv4(),
            task: task,
            completed: false
        }
        setTodos([...todos, newTask]);
        saveToStorage(newTask)
    }

    const saveToStorage = (item) => {
        const todoItems = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        todoItems.push(item)
        localStorage.setItem("todos", JSON.stringify(todoItems))

    }

    const deleteTask = (deleteId) => {
        const filterTask = todos.filter((elem, i) => {
            return elem.id !== deleteId
        })
        setTodos(filterTask)
        localStorage.setItem("todos", JSON.stringify(filterTask))
    }
    const handleComplete = (updateId) => {
        const updatedTodo = todos.map(item => {
            if (item.id == updateId) {
                console.log(item.completed)
                item.completed = !item.completed
            }
            return item
        })
        setTodos(updatedTodo)
        localStorage.setItem("todos", JSON.stringify(updatedTodo))

    }


    return (
        <div>
            <Todo propsAdd={addTodo} />
            {todos.map((todo) => {
                return (
                    <div className="todoitem" key={todo.id}>
                        <p className={todo.completed ? "completed" : ""}>
                            {todo.task}
                        </p>
                        <input onChange={() => handleComplete(todo.id)} type="checkbox" checked={todo.completed} />
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Display;

