import { useState } from "react";

function Dropdown({items, onItemClick}){
    const [isOpen ,setIsOpen]= useState(false);

    const toggleDropdown =()=>{
        setIsOpen(!isOpen)
        console.log(setIsOpen)
    }
    const handleItemClick=(item)=>{
        onItemClick(item)
        setIsOpen(false)
    }
    console.log(handleItemClick)
    



    return(
        <div className="dropdown">
            
            <button className="dropdown-button" onClick={toggleDropdown }>
                Select
            </button>
            <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className="dropdown-item"
            >
              {item}
            </li>
          ))}
        </ul>
        </div>
    )
}



export default Dropdown;