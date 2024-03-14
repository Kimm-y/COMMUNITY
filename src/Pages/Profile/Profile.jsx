import './Profile.css'
import React, { useState, useEffect, useContext } from 'react';
import { supabase } from "../../utils/supbaseConfig"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts"
import { AuthContext } from '../../context/authContext';


function Profile({ userId }) {

  const { session } = useContext(AuthContext)
  console.log(session)

    const [isFollowing, setIsFollowing] = useState(false);
  
    useEffect(() => {
      const checkIsFollowing = async () => {
        const { data, error } = await supabase
          .from('follows')
          .select('*')
          .eq('follower_id', supabase.auth.user().id)
          .eq('followee_id', userId);
  
        if (error) {
          console.error('Error checking follow status:', error.message);
        } else {
          setIsFollowing(data.length > 0);
        }
      };

      
    checkIsFollowing();
  }, [userId]);

  const handleToggleFollow = async () => {
    if (isFollowing) {
      
      await supabase
        .from('follows')
        .delete()
        .eq('follower_id', supabase.auth.user().id)
        .eq('followee_id', userId);
    } else {
      
      await supabase.from('follows').insert([
        { follower_id: supabase.auth.user().id, followee_id: userId },
      ]);
    }

    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile">
    <div className="images">
      <img
        src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/PAFF_040118_helpingothers-609x419.jpg"
        alt=""
        className="cover"
      />
      <img
        src={session ? session.user.user_metadata.picture : "No picture"}
        alt=""
        className="profilePic"
      />
    </div>
    <div className="profileContainer">
      <div className="pInfo">
        <div className="left">
          <a href="http://facebook.com">
            <FacebookTwoToneIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="http://facebook.com">
            <PinterestIcon fontSize="large" />
          </a>
        </div>
        <div className="center">
          <span>{
              session ? session.user.user_metadata.name : "No name"
            }</span>
          <div className="info">
            <div className="item">
              <PlaceIcon />
              <span>KENYA</span>
            </div>
          </div>
          <button onClick={handleToggleFollow}> 
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
        </div>
        <div className="right">
          <EmailOutlinedIcon />
          <MoreVertIcon />
        </div>
      </div>
    <Posts/>
    </div>
  </div>
);
};



export default Profile
