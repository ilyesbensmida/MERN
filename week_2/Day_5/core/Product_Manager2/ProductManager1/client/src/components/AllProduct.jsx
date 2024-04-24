import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProduct = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/api/product/")
            .then((res) => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            {
                product.map((oneProduct) => {
                    return (
                        <div key={oneProduct._id}>
                            <Link to={"/product/" + oneProduct._id}>
                                <h2>{oneProduct.title}</h2>
                            </Link>
                            <h2>{oneProduct.content}</h2>
                            <p>{oneProduct.createdAt}</p>
                            <Link to={`/product/${oneProduct._id}/edit`}>Update</Link>
                            <hr />
                        </div>
                    )
                })
            }







        </div>
    )
}

export default AllProduct