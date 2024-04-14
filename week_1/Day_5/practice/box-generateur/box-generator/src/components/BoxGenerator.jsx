import React, { useState } from 'react';

const BoxGenerator = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { color, size: parseInt(size) || 100 }]); // Add box with default size of 100
    setColor('');
    setSize('');
  };

  return (
    <div>
      <h2>Box Generator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color: </label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <label htmlFor="size">Size (px): </label>
        <input
          type="number"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box) => (
          <div
            key={box.color}
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
              margin: '5px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
