import React, { useState } from 'react';

const Tabs = ({ items, onSelect }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleClick = (index) => {
    const currentContent = document.querySelector('.tabs-content-item.active');
    const newContent = document.querySelectorAll('.tabs-content-item')[index];

    currentContent.classList.toggle('fade-out');
    newContent.addEventListener('transitionend', () => {
      setSelectedTabIndex(index);
      onSelect && onSelect(index);
      currentContent.classList.remove('fade-out');
      newContent.classList.add('active');
    });
  };
  
  return (
    <div className="tabs">
      <ul className="tabs-header">
        {items.map((item, index) => (
          <li key={index} className={`tabs-header-item ${selectedTabIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
            {item.label}
          </li>
        ))}
      </ul>
      <div className="tabs-content">
  {items.map((item, index) => (
    <div key={index} className={`tabs-content-item ${selectedTabIndex === index ? 'active' : 'hidden'}`}>
      {items[index].content}  {/* Access content based on index */}
    </div>
  ))}
</div>
    </div>
  );
};

export default Tabs;

