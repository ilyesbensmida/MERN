import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const People = (props) => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${ id }`)
        .then(response => setPerson(response.data))
    }, []);
    console.log(person);

    return (
        <div>
            <h1>{ person.name }</h1>
            <p>Height: { person.height }</p>
            <p>Mass: { person.mass }</p>
            <p>Hair Color: { person.hair_color }</p>
            <p>Skin Color: { person.skin_color }</p>
        </div>
    );
}

export default People;