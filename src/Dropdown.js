import React, { useState } from 'react';
import "./Dropdown.css"

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); 
    setIsOpen(false);
    console.log(`Selected: ${item}`);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button>Open Dropdown</button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {selectedItem && <p className="selected-item">Selected Skill: {selectedItem}</p>}
    </div>
  );
};

export default Dropdown;
