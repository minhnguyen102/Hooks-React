import { useState } from "react";

function App() {
  const user = {
    name: "Nguyen Van A",
    age : 20,
    address: "Ha Noi"
  }

  const [info, setInfo] = useState(user)

  const handleChangeInfo = () => {
    setInfo({
      ...user,
      bio: "Like football"
    })
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick = { handleChangeInfo }>Change</button>
    </div>
  );
}

export default App;
