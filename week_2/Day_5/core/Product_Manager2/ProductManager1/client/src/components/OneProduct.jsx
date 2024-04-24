import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {

    const [oneProduct, setOneProduct] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/api/product/" + id)
            .then((res) => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            {
                oneProduct ? <>
                    <h1>{oneProduct.title}</h1>
                </> : <p>Loading...</p>
            }



        </div>
    )
}

export default OneProduct