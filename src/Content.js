import { useEffect, useState } from "react"
function Content() {
    // 1.useEffect(Callback)
        // Luôn được gọi khi component re-render
    // 2.useEffect(Callback, [])
    // 3.useEffect(Callback, [depens])

    // ---
    // - Callback luôn được gọi sau khi component được mount (Chú ý khái niệm mount, unmount, render, re-render)
    const [title, setTitle] = useState("")
    useEffect(() => {
        console.log("useEffect")
        document.title = title
    })
    return (
        <>
            <input 
                value={title} 
                onChange={e => setTitle(e.target.value)}
            />
        </>
    )
}

export default Content