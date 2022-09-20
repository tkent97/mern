import React, { useState } from "react";

const Todo = ({ propsAdd }) => {
    // console.log(props)

    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        propsAdd(task);
        setTask("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Task</h1>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Todo;