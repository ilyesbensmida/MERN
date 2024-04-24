
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AllProduct from "../src/components/AllProduct"
import CreateProduct from "../src/components/CreateProduct"
import OneProduct from "../src/components/OneProduct"
import UpdateProduct from "../src/components/UpdateProduct"


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/product/create">Create</Link>

      <Routes>
        <Route path="/product" element={<AllProduct />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/:id" element={< OneProduct/>} />
        <Route path="/product/:id/edit" element={< UpdateProduct/>} />

      </Routes>
  
    </div>
  );
}

export default App;