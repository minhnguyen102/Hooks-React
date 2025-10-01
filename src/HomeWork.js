import { useState } from "react"

function HomeWork () {
    // Ex1: Viết thêm các tính năng: Không cho giảm xuống 0, nhập step tăng theo ý muốn, có nút reset về 0
    // const [count, setCount] = useState(0)
    
    // const handleIncrease = () => {
    //     setCount(count + 1)
    // }
    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }
    // return (
    //     <div className="HomeWork" style={{padding: 20}}>
    //         <h1>{count}</h1>
    //         <button onClick={handleIncrease}>Increase</button>
    //         <button onClick={handleDecrease}>Decrease</button>
    //     </div>
    // )

    // EX2:
    // const [status, setStatus] = useState(true)

    // const handleChange = () => {
    //     setStatus(!status)
    // }
    // return (
    //     <div className="HomeWork" style={{padding: 20}}>
    //         {status? <h1>Hello React</h1> : <></>}
    //         <button onClick={handleChange}>{status? "Hidden" : "Show"}</button>
    //     </div>
    // )

    // EX3
    // const [name, setName] = useState("new friend")

    // const handleChange = (e) => {
    //     setName(e.target.value)
    // }
    // return (
    //     <div className="HomeWork" style={{padding: 20}}>
    //         <input value={name} onChange={handleChange} id="name"></input>
    //         <p id="content">{`Hello ${name}`}</p>
    //     </div>
    // )

    // EX4: Todo Lists : viết thêm button xóa
    // const [todos, setTodos] = useState([])

    // const handleClick = () => {
    //     const workAdd = document.getElementById("work-add").value
    //     setTodos([
    //         ...todos,
    //         workAdd
    //     ])
    //     document.getElementById("work-add").value = ""
    // }
    // return (
    //     <div className="HomeWork" style={{padding: 20}}>
    //         <ul>
    //             {todos.map((todo, index) => {
    //                 return (
    //                     <li key={index}>
    //                         {todo}
    //                     </li>
    //                 )
    //             })}
    //         </ul>
    //         <input id="work-add"></input>
    //         <button onClick={handleClick}>Add</button>
    //     </div>
    // )
}

export default HomeWork