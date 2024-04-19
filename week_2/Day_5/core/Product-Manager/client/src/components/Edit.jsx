import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const [newProduct, setNewProduct] = useState({ title: '', price: '', description: ''})
    const [noteError, setNoteError] = useState({ title: '', price: '', description: '' })
    const navigate = useNavigate()
    const EditNote = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', newProduct)
            .then(res => {
                console.log(res.data);
                navigate(`/`)
            })
            .catch(error => {
                console.log(error)
                let tempErrors = {}
                for (let key of Object.keys(error.response.data)) {
                    console.log(key, '------------', error.response.data[key]);
                    tempErrors[key] = error.response.data[key].message
                }
                setNoteError({ noteError, ...tempErrors })
            })

    }
    return (
        <form onSubmit={(e) => EditNote(e)} >
            <div className="container p-3 col-6 ">
                <div className="mb-3 ">
                    <label className="form-label">Title :</label>
                    <input type="text" className="form-control w-25" onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} value={newProduct.title} />
                    <span className='h4 text-danger'>{noteError.title && noteError.title}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price :</label>
                    <input className="form-control w-25" type='number' onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} value={newProduct.price} />
                    <span className='h4 text-danger'>{noteError.price && noteError.price}</span>

                </div>
                <div className="mb-3 ">
                <label className="form-label">Description :</label>
                <textarea className="form-control w-75" cols="6" rows="3" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} value={newProduct.description} />
                <span className='h4 text-danger'>{noteError.description && noteError.description}</span>
                </div>
                <button className="btn btn-primary">Edit</button>
            </div>
        </form>
    )
}

export default Edit