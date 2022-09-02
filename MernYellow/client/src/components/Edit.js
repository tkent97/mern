import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'

const Edit = () => {
    const [pet, setPet] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPet(res.data)
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch(err => console.error(err))
    }, [id]);

    const submitForm = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pet/" + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            setSkill3
        })
            .then(res => {
                console.log(res.data);
                history.push("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Edit {pet.name}</h3>
            <form onSubmit={submitForm}>
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
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Edit;