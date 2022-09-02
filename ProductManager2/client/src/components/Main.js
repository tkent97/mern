import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const Main = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
            .then(res => {
                console.log(res.data)
                history.push('/')
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <label>Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}></input>
                <label>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <button type="submit">create </button>
            </form>
        </div>
    )
}
export default Main