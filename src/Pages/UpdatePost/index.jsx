import './index.css'
import { useState } from "react"
import { supabase } from "../../utils/supbaseConfig"
import { useNavigate, useLocation } from "react-router-dom"

const UpdatePost = () => {
    const postSelected = useLocation().state

    const [title, setTitle] = useState(postSelected.title)
    const [content, setContent] = useState(postSelected.content)
    const [image, setImage] = useState(postSelected.image)
    const [owner, setOwner] = useState(postSelected.owner)
    const navigate = useNavigate()

   

    const updatedPost = async (e) => {
        e.preventDefault()
        let { data: updatedValue, error } = await supabase
            .from('posts')
            .update({
                title: title,
                content: content, 
                image: image,
                owner: owner
            })
            .eq('id', `${ postSelected.id }`)
            .select('*')


        if (error) {
            alert("An error occured")
        } else {
            navigate("/")
        }

    }

    return (
        <div className='update'>
            <h1>UPDATE POSTS</h1>
            <form className="insert" onSubmit={updatedPost}>
                <div className='updated'>
                    <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                    <input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
                    <input placeholder="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                </div>

                <button className='updated-post' type="submit">Update Post</button>
            </form>
        </div>
    )
}

export default UpdatePost