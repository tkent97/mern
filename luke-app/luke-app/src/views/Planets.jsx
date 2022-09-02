import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Planets = () => {
    const history = useHistory();

    const [planet, setPlanet] = useState({});
    const { planet_id } = useParams();

    useEffect(
        () => {
            axios
                .get("https://swapi.dev/api/planets/" + planet_id)
                .then((response) => setPlanet(response.data))
                .catch((error) => history.push("/error"));
        },
        [planet_id]
    );
    return (
        <div>
            <fieldset>
                <h2>{planet.name}</h2>
                {planet ? (
                    <div>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Terrain: {planet.terrain}</h3>
                        <h3>Surface Water: {planet.surface_water}</h3>
                        <h3>Population: {planet.population}</h3>
                    </div>
                ) : (
                    <h1>LOADING.....</h1>
                )}
            </fieldset>
        </div>
    );
};

export default Planets;