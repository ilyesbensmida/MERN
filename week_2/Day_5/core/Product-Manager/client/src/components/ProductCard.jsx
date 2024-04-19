import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NoteCard = ({ product,deleteProduct }) => {
    const navigate=useNavigate()
    return (
        <div className="card">
            <h5 className="card-header" onClick={()=>navigate(`/products/${product._id}`)}><strong>Title: </strong>{product.title}</h5>
            <div className="card-body">
                <p className="card-text"><strong>Price: </strong>{product.price}</p>
                <p className="card-text"><strong>Description: </strong>{product.description}</p>
                <div className="text-end">
                    <Link className='btn btn-warning' to={`/products/${product._id}/edit`}>Edit</Link>
                    <Link className='btn btn-danger ms-3' onClick={()=>deleteProduct(product._id)}>Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default NoteCard