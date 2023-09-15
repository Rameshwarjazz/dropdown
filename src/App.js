import Dropdown from './Dropdown';
import { useState } from "react";
import './App.css';

function App() {
  const items = ['Option1', 'Option2', 'Option3'];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="App">
    <h1>Have You Gained Skill From Coding Ninja</h1>
    <Dropdown items={items} onItemClick={handleItemClick} />
      {selectedItem && (
        <p>You selected: {selectedItem}</p>
      )}
    </div>
  );
}

export default App;
