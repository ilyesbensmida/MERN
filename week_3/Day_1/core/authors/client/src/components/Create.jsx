import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {
    const [name,setName]=useState("")
    const [errors,setErrors]=useState([])
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/api/authors',{name})
        .then((res)=>{console.log(res);navigate('/')})
        .catch((error)=>{
            const errorResponse=error.response.data.errors;
            const errorArr=[]
            for(let key of Object.keys(errorResponse)){errorArr.push(errorResponse[key].message)}
            setErrors(errorArr)
        })
    }
  return (
    <div className='container p-3'>
        <h1 className="m-3">Favorite authors</h1>
        <p className="m-3">Add a new author:</p>
        <form className="p-5 border shadow" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            {errors.map((error,index)=>(
                <p key={index} className='text-danger'>{error}</p>
            ))}
            <div>
                <button type="submit" className="btn btn-lg btn-success m-3">Submit</button>
                <button className="btn btn-lg btn-secondary m-3" onClick={()=>navigate('/')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Create