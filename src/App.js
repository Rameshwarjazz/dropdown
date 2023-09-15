import Dropdown from './Dropdown';

function App() {
  const items = ["React", "Node.js", "Javascript"];

  return (
    <div className="App">
      <h1>The skill that you gain from Coding Ninja. </h1>
      <Dropdown items={items} />
    </div>
  );
}


export default App;
