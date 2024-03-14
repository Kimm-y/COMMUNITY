import './index.css'
import { useState } from "react"
import { supabase } from "../../utils/supbaseConfig"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const [ title, setTitle] = useState("")
    const [ content, setContent ] = useState("")
    const [ image, setImage ] = useState("")
    const [ owner, setOwner ] = useState("")
    const navigate = useNavigate()

    const insertPost = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase
            .from('posts')
            .insert([
                { 
                    title: title, 
                    content: content,
                    image: image,
                    owner: owner
                },
            ])
            .select()

            if ( error ){
                console.log(error)
            } else {
                console.log(data)
                navigate("/")
            }

    }

    return (
        <div className='insert'>

            <h1>INSERT   A   NEW   POST</h1>
            <form onSubmit={insertPost}>
                <div className='input'>
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input placeholder="Content" onChange={(e) => setContent(e.target.value)} />
                <input placeholder="Image" onChange={(e) => setImage(e.target.value)} />
                <input placeholder="Owner" onChange={(e) => setOwner(e.target.value)} />
                </div>
                <button className='submit' type="submit">Submit Post</button>
            </form>
        </div>
    )
}

export default CreatePost