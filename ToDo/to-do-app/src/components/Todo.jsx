import React, { useState } from "react";

const Todo = (props) => {
    const { addTodo } = props;

    const [task, setTask] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(task);
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                <input type="submit" className=" btn-primary" value="add" />
            </form>
        </div>
    );
};

export default Todo;