import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/authors'} />} />
        <Route path='/authors' element={<Home/>}/>
        <Route path='/authors/new' element={<Create/>}/>
        <Route path='/authors/:id/edit' element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App