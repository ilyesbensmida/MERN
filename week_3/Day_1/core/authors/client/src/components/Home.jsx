import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Home = () => {
    const [authors,setAuthors]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/authors`)
        .then(res=>{
            setAuthors(res.data)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteObj=(id)=>{
        axios.delete(`http://localhost:5000/api/authors/${id}`)
        .then(res=>setAuthors(authors.filter(c=>c._id!==id)))
        .catch(error=>console.log(error))
    }
  return (
    <div className="container">
        <h1 className='m-3'>Favorite Authors</h1>
        <Link to="/authors/new" className='btn btn-lg btn-success m-3'>Add Author</Link>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col" className='text-center'>Name</th>
                    <th scope="col" className='text-center'>Options</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(c=>(
                    <tr>
                        <td scope="col" className='h4 text-center'>{c.name}</td>
                        <td scope="col" className='d-flex justify-content-center'>
                            <button className='btn btn-lg btn-warning m-1' onClick={()=>navigate(`/authors/${c._id}/edit`)}>Edit</button>
                            <button className='btn btn-lg btn-danger m-1'onClick={()=>deleteObj(c._id)}>Delete</button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
            </table>
    </div>
  )
}

export default Home