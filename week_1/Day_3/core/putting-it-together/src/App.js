import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/Person';

function App() {
  const people = [{firstname:"Jane", lastname:"Doe", age:45, haircolor:"Black"},
    {firstname:"Smith", lastname:"john", age:88, haircolor:"Brown"}];
  return (
    <div className="App">
      {people.map((person,idx)=><PersonCard key={idx} person={person}/>)}
    </div>
  );
}
export default App;
