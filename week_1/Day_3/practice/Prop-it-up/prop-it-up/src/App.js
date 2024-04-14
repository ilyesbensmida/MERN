import React from 'react';
import PersonCard from './components/PersonCard';
//import { Link } from 'react-router'


function App() {
  const people = [
    { firstName: 'John', lastName: 'Doe', age: 30, hairColor: 'Brown' },
    { firstName: 'Jane', lastName: 'Smith', age: 25, hairColor: 'Blonde' },
    { firstName: 'Mike', lastName: 'Johnson', age: 40, hairColor: 'Black' },
    { firstName: 'Alice', lastName: 'Williams', age: 28, hairColor: 'Red' },
  ];

  return (
    <div className="App">
      {people.map((person) => (
        <PersonCard
          key={person.firstName} // Key prop for better performance with lists
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
        />
      ))}
    </div>
  );
}

export default App;