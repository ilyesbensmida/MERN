import SWAPI from './components/SWAPI';
import People from './components/People';
import Planets from './components/Planets';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <SWAPI></SWAPI>
      <Routes>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planets/:id" element={<Planets />}/>
      </Routes>
    </div>
  );
}

export default App;