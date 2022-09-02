import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'

const New = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([])
    let history = useHistory();

    const onSubmitHandler = (e) => {
        console.log("something")
        e.preventDefault();
        console.log("submitted")
        const newPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        }
        axios.post('http://localhost:8000/api/pet', newPet)
            .then(res => {
                console.log(res.data)
                history.push('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(err)
                const errorArr = [];
                for (const Key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[Key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <label>Pet Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Pet Type:</label>
                <input type="text" onChange={(e) => setType(e.target.value)} value={type}></input>
                <label>Pet Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <label>Skill 1:</label>
                <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1}></input>
                <label>Skill 2:</label>
                <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2}></input>
                <label>Skill 3:</label>
                <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3}></input>
                <button type="submit">Add Pet</button>
            </form>
        </div>
    )
}
export default New;