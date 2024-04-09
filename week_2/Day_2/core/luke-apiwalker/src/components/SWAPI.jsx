import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SWAPI = props => {
    const [searchVal, setSearchVal] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const search = (e) => {//hooks can't be in nested for loops, how would you do this?
        e.preventDefault();
        navigate(`/${ searchVal }/${ id }`);
    }

    return (
        <form onSubmit={ search }>
            <label>Search for: </label>
            <select onChange={ (e) => setSearchVal(e.target.value) }>
                <option value="">Choose a Category</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label name="id">ID: </label>
            <input type="number" name="id" onChange={ (e) => setId(e.target.value) }></input>
            <input type="submit" value="Search"></input>
        </form>
    );
}

export default SWAPI;