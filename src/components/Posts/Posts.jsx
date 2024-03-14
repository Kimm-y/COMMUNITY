import React, { useEffect, useState } from 'react'

import Post from "../post/Post"
import "./Posts.css"

import { supabase } from '../../utils/supbaseConfig'
import { Link } from 'react-router-dom'

function Posts() {



  const [deleted, setDeleted ] = useState(false)

  const deletePost = async (id) => {
    let { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', `${id}`)


    if (error) {
      alert("An error occured")
      console.log(error)
    } else {
      setDeleted(true)
    }

  }
  const [recentposts, setRecent] = useState([])

  const fetchPosts = async () => {
    let { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      alert("An error occured")
    } else {
      setRecent(posts)
      console.log(posts)
    }
  }








  useEffect(() => {
    fetchPosts()
  }, [deleted])

  return (
    <div className='container'>
      <Link to="/create-post"><button className='post-button'>Create Post</button></Link>
      {
        recentposts.map((post) => {
          return (
                <>   
            <div className='posts' key={post.id}>
              {/* <img src={post.image} alt=""  className='image'/>
              <h3>{post.title}</h3>
              <p>{post.owner}</p> */}
               <Post post={post} />
               <div className='buttons'>
              <Link to="/update-post" state={post}><button className='update-button'>Update</button></Link>
              <button onClick={() => { deletePost(post.id) }} className='delete'>Delete</button>

              </div>
               </div>

             
              
              </> 
          )
        })
      }

    </div>
  )
}



export default Posts
