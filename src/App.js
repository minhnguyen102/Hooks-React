import { useState } from "react";

function App() {
  const [name, setName] = useState()
  
  console.log(name)
  const handleSubmit = () => {
    console.log({name})
  }
  return (
    <div className="App" style={{padding: 20}}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={(e) => setName("Nguyen Van B")}>Change</button>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default App;
