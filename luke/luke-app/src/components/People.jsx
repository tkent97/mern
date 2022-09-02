import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";


const People = () => {
    const [person, setPerson] = useState({});
    const { person_id } = useParams();

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/" + person_id)
            .then((response) => setPerson(response.data))
            .catch((error) => console.log(error));
    },
        [person_id]
    )
    return (
        <div>
            <h1>{person.name}</h1>
            {person ? (
                <div>
                    <h3>Height: {person.height} cm</h3>
                    <h3>Mass: {person.mass} kg</h3>
                    <h3>Hair Color: {person.hair_color}</h3>
                    <h3>Skin Color: {person.skin_color}</h3>
                </div>
            ) : (<h1>Loding please wait</h1>)}
        </div>
    )
}
export default People;