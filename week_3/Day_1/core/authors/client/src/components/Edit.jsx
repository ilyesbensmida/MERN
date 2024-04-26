import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Edit = () =>{
    const{id}=useParams()
    const [name,setName]=useState("")
    const [errors,setErrors]=useState([])
    const navigate = useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:5000/api/authors/'+id,{name})
        .then((res)=>{console.log(res);navigate('/')})
        .catch((error)=>{
            const errorResponse=error.response.data.errors;
            const errorArr=[]
            for(let key of Object.keys(errorResponse)){errorArr.push(errorResponse[key].message)}
            setErrors(errorArr)
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/api/authors/'+id)
        .then(res=>{
            setName(res.data.name)
        })
        .catch(error=>console.log(error))
    },[id])
  return (
    <div className='container p-3'>
        <h1 className="m-3">Favorite authors</h1>
        <p className="m-3">Edit this author:</p>
        <form className="p-5 border shadow" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            {errors.map((error,index)=>(
                <p key={index} className='text-danger'>{error}</p>
            ))}
            <div>
                <button type="submit" className="btn btn-lg btn-warning m-3">Update</button>
                <button className="btn btn-lg btn-secondary m-3" onClick={()=>navigate('/')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Edit