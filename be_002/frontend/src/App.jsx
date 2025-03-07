import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 
  const[posts,setPosts] = useState([])

  useEffect(() =>{
    axios.get('/api/post')
    .then((response) => {
      setPosts(response.data)
    })
    .catch((error)=>{
     console.log(error);
    })
  })

  return (
    <>
      <h1> App in React and Node</h1>
      <p>POSTS: {posts.length} </p>

        {
          posts.map((post,index) => (

            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>

          ))
        }
    </>
  )
}

export default App
