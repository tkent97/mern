import React, { useState } from "react";
import Todo from "./Todo";

const TodoDisplay = () => {
    const [todo, setTodo] = useState([]);

    const addTodo = (task) => {
        const taskId = todo.length;
        setTodo([...todo, { task: task, completed: false, removed: false, id: taskId },
        ]);
    };

    const removeToDO = (e) => {
        let id = e.target.value;
        const copy = JSON.parse(JSON.stringify(todo));
        copy[id].removed = true;
        setTodo(copy);
    };

    const completeTodo = (e) => {
        let id = e.target.value;
        const copy = JSON.parse(JSON.stringify(todo));
        copy[id].completed = true;
        setTodo(copy);
    };

    const completedStyle = {
        textDecoration: "line-through",
    };
    return (
        <div className="bg-dark text-light">
            <h1>To do list</h1>
            <Todo addTodo={addTodo} />
            <h3>To do:</h3>

            {todo
                .filter((task) => task.removed == false)
                .map((task) => (
                    <div>
                        <h3 key={task.id} style={task.completed ? completedStyle : {}}>
                            {task.task}
                        </h3>
                        <input type="checkbox" value={task.id} onClick={completeTodo} />
                        <button
                            className="btn btn-warning"
                            value={task.id}
                            onClick={removeToDO}
                        >
                            Delete
                        </button>
                    </div>
                ))}
        </div>
    );
};

export default TodoDisplay;