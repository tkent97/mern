import React, { useState } from "react"
const New = ({ createBox }) => {
    const [newColor, setNewColor] = useState("")

    const createNew = (e) => {
        e.preventDefault();
        const myNewBox = {
            color: newColor
        }
        createBox(myNewBox);
        setNewColor("");
    }
    return (
        <div>
            <form onSubmit={createNew}>
                <label>Submit color:</label>
                <input type="text" onChange={e => { setNewColor(e.target.value) }} value={newColor} />
                <button>add color</button>
                <p>form</p>
            </form>
        </div>
    )
}
export default New