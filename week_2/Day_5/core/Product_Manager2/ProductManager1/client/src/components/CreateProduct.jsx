import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const CreateProduct = () => {
  const [Title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  // Handel ERRORS 
  
  const [ErrorState, setError] = useState([])

  const nav = useNavigate()

  const SubmitHandler = (e) => {
      e.preventDefault()

      const newObj = {
          Title,
          price,
          description
      }
      axios.post("http://localhost:5000/api/product/", newObj)
          .then((res) => {
              console.log(res.data._id)
              nav("/product/" + res.data._id)
          })
          .catch(err => {
              console.log(err.response.data.errors.title)
              const ServerErrors = err.response.data.errors
              const errArray = []
              for (const key of Object.keys(ServerErrors)) {
                  errArray.push(ServerErrors[key].message)
              }
              setError(errArray)

          })
  }

  // console.log(Tit)

  return (
    <div>
      {ErrorState.length > 0 && (
      <div className="error-messages">
        {/* Map through ErrorState and display each error message */}
      </div>
    )}
      <form onSubmit={SubmitHandler}>
        <label>
          Title:
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
