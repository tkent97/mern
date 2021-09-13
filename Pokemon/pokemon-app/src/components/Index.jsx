import React, { useState } from "react";
import axios from "axios";

const Index = () => {
    const [state, setState] = useState();

    const axiosCall = () => {

        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=900")
            .then((answer) => setState(answer.data.results))
    };

    const listStyle = {
        'textAlign': "center"
    };
    return (
        <div>
            <button className="btn" onClick={axiosCall}>find Pokemon</button>
            {state ? (
                <ul style={listStyle}>
                    {state.map((pokemon, i) => (
                        <li key={i}>{pokemon.name}</li>
                    ))}
                </ul>
            ) : (
                <h1>wanna catch pokemon?</h1>
            )}
        </div>
    );
};

export default Index;