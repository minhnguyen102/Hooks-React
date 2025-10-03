import { useEffect, useState } from "react"
function Content() {
    // 1.useEffect(Callback)
        // Luôn được gọi khi component re-render
    // 2.useEffect(Callback, [])
    // 3.useEffect(Callback, [depens])

    // ---
    // - Callback luôn được gọi sau khi component được mount (Chú ý khái niệm mount, unmount, render, re-render)
    // useEffect(() => {
        
    // })
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data.posts)
        })
    }, [])

    return (
        <>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Content