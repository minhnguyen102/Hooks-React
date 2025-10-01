import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Javascript"
  },
  {
    id: 2,
    name: "HTML, CSS"
  },
  {
    id: 3,
    name: "React"
  },
]





function App() {
  const [checked, setChecked] = useState(1)

  const handleChange = (id) => {
    //setChecked
    setChecked(id)
  }

  const handleSubmit = () => {
    // Call API
    console.log({
      id: checked
    })
  } 
  
  return (
    <div className="App" style={{padding: 20}}>
      {courses.map(course => {
        return (
          <div key={course.id}> 
            <input
             type="radio"
             checked={checked === course.id}
             onChange={() => handleChange(course.id)}
            />
            {course.name}
          </div>
        )
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
