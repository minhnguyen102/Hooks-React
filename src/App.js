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
  const [checked, setChecked] = useState([])

  const handleChange = (id) => {
    //setChecked
    setChecked(pre => {
      if(checked.includes(id)){
        // uncheck
        return (checked.filter(item => item !== id))
      }else{
        return [
          ...checked,
          id
        ]
      }
    })
  }

  const handleSubmit = () => {
    // Call API
    console.log(checked)
  } 
  
  return (
    <div className="App" style={{padding: 20}}>
      {courses.map(course => {
        return (
          <div key={course.id}> 
            <input
             type="checkbox"
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
