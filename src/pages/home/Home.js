import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isUserAuthenticated, getToken } from '../../utils/utils.js'

export default function Home() {
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        //check if local storage present
        if (!isUserAuthenticated()) {
            // redirect to login
            navigate('/login')
            return;
        }

        fetch(`http://localhost:3001/posts?token=${getToken()}`)
            .then(res => res.json())
            .then(response => {



                //all posts
                setPosts(response)

            })

    }, [])


    const SendPost = () => {
        const post = {
            content: content,
            author: getToken()
        }

        fetch(`http://localhost:3001/posts?token=${getToken()}`, {
            body: JSON.stringify(post),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {

                //all posts
                setPosts(response)

            })

    }

    return (
        <>
            <input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder='content' /><br />
            {/* <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder='author' /><br /> */}
            <button onClick={SendPost}>Send</button>

            <hr />

            <h1>All posts</h1>

            {posts
            .sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 0)
            .map(x => <p><b>{x.content}</b> by {x.author}</p>)}

        </>
    );
}