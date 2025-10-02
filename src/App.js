import { useState } from "react";

function App() {
  const [job, setJob] = useState("")
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")) ?? [])

  const handleSubmit = () => {
    setJobs(pre => {
      const jobLocalStorage = [...jobs, job]
      localStorage.setItem("jobs", JSON.stringify(jobLocalStorage))
      // console.log(jobLocalStorage) // dòng này lại được in ra sau 
      return jobLocalStorage
    })
    setJob("")

    // console.log(jobs) // có mội trình xử lí bên dưới (Dòng này được in trước => trình xử lí chưa setJob vội)
    // Cần hiểu rõ luồng hoạt động của dòng 16 và dòng 11
  }

  return (
    <div className="App" style={{padding: 20}}>
      <input 
        value={job} 
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, item) => {
          return (
            <li key={item}>{job}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
