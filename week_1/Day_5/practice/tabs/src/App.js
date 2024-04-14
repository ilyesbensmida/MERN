import React from 'react';
import Tabs from './components/Tabs';  // Import the Tabs component
import './App.css';        // Import the CSS styles (relative path)
 

const items = [
  { label: 'Tab 1', content: 'Content of Tab 1' },
  { label: 'Tab 2', content: 'Content of Tab 2' },
  { label: 'Tab 3', content: 'Content of Tab 3', onSelect: (index) => console.log(`Tab ${index + 1} selected!`) },
];

function App() {
  return (
    <div className="App">
      <Tabs items={items} />
    </div>
  );
}

export default App;
