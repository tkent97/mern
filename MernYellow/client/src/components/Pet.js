import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'


const Pet = (props) => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    const { removeFromDom } = props;
    const history = useHistory();
    const Delete = (id) => {
        axios.delete('http://localhost:8000/api/pet/' + id)
            .then(res => {
                console.log(res.data);
                history.pushState('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err))
    }, [id]);
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Details about: {pet.name}</h3>
            <Link to="/">Back home</Link>
            <button><Link to="/" onClick={(e) => { Delete(pet._id) }}>Adopt {pet.name} </Link></button>
            <hr />
            <h5>Pet Type &nbsp;&nbsp;&nbsp; {pet.type}</h5>
            <h5>Description &nbsp;&nbsp;&nbsp; {pet.description}</h5>
            <h5>Skills &nbsp;&nbsp;&nbsp; {pet.skill1}{pet.skill2}{pet.skill3}</h5>
        </div >
    )
}

export default Pet;