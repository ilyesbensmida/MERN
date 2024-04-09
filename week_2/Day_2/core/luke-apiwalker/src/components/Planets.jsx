import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Planets = (props) => {
    const [planet, setPlanet] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${ id }`)
        .then(response => setTimeout(() => {
            setPlanet(response.data)
        }, 3000))
    }, []);
    console.log(planet);

    return (
        <div>
            <h1>{ planet.name }</h1>
            <p>Climate: { planet.climate }</p>
            <p>Terrain: { planet.terrain }</p>
            <p>Surface Water: { planet.surface_water }</p>
            <p>Population: { planet.population }</p>
        </div>
    );
}

export default Planets;