import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts"

function Page() {
  return (
    <div className="profile">
    <div className="images">
      <img
        src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/PAFF_040118_helpingothers-609x419.jpg"
        alt="logo"
        className="cover"
      />
      <img
        src="https://whwmzevsajfomnepcyzz.supabase.co/storage/v1/object/public/MyImgaes/redcrosslogo.png?t=2024-03-13T05%3A38%3A59.859Z"
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
          <span>KENYA RED CROSS</span>
          <div className="info">
            <div className="item">
              <PlaceIcon />
              <span>KENYA</span>
            </div>
          </div>
          <button>follow</button>
        
        <a href="https://www.redcross.or.ke/volunteer/">
          <button>volunteer</button>
          </a>
        </div>
        <div className="right">
          <EmailOutlinedIcon />
          <MoreVertIcon />
        </div>
      </div>
    <Posts/>
    </div>
  </div>
  )
}

export default Page
