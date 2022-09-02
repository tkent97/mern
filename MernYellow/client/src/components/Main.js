import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Edit from './Edit';
const Main = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPetsFromDB();
    }, [])

    const getPetsFromDB = () => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                console.log(res.data);
                setPets(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Pet shelter</h1>
            <Link to="/pet/new">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home!</h3>
            <hr />
            {/* {JSON.stringify(pets)} */}
            {
                pets.map((pet, i) => {
                    return (
                        <div key={pet._id}>
                            <h5>{pet.name}</h5>
                            <h5>{pet.type}</h5>
                            <Link to={`/pet/${pet._id}`}>Details</Link>   | &nbsp;
                            <Link to={`/pet/${pet._id}/edit`}>Update</Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;