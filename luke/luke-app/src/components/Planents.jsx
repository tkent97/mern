import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

const Planets = () => {
    const [planets, setPlanets] = useState({});
    const { planets_id } = useParams();

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/planets/" + planets_id)
            .then((response) => setPlanets(response.data))
            .catch((error) => console.log(error));
    },
        [planets_id]
    )
    console.log()
    return (
        <div>
            <h1>{planets.name}</h1>
            {planets ? (
                <div>
                    <h3>Climate: {planets.climate}</h3>
                    <h3>Terrain: {planets.terrain}</h3>
                    <h3>Surface Water: {planets.surface_water}</h3>
                    <h3>Population: {planets.population}</h3>
                </div>
            ) : (<h1>Loading</h1>)}
        </div>
    );
};

export default Planets;