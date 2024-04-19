import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const Show = () => {
    const [product, setProduct] = useState({ title: '', price: '', description: '' })
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.oneProduct)
                setProduct(res.data.oneProduct)
            }
            )
            .catch(error => console.log(error))
    }, [id])
    return (
        <div className='container p-3'>
            <div className="card">
                <h5 className="card-header" onClick={()=>navigate(`/products/${product._id}`)}> <strong>Title: </strong>{product.title}</h5>
                <div className="card-body d-flex flex-column gap-3">
                    <p className="card-text"><strong>Price: </strong>{product.price}</p>
                    <p className="card-text"><strong>Description: </strong>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Show