import { useState } from "react";
import Content from "./Content";

function App() {
  const [check, setCheck] = useState(false)
  return (
    <div className="App" style={{padding: 20}}>
      <button onClick={() => setCheck(!check)}>Toggle</button>
      {check && <Content />}
    </div>
  );
}

export default App;
