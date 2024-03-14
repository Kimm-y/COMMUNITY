import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';


const Post = ({post}) => {
  const { session } = useContext(AuthContext)



  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={session ? session.user.user_metadata.picture : "No picture"} alt="" />
            <div className="details">
              <Link
                to={`/profile/${ session ? session.user.user_metadata.name : "No name"}`}
                style={{ textDecoration: "none", color: "inherit" }} >
                <span className="name">{post.owner}</span>
              </Link>
              
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.title}</p>
          <img src={post.image} alt="" />
          <p>{post.content}</p>
        </div>
        <div className="info">
        </div>
       
      </div>
      </div>
   
  );
};

export default Post;