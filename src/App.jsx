import './App.css'
import 'tailwindcss/tailwind.css';
import Landing from './Pages/Landing/Landing.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import { Link } from 'react-router-dom'

import React, { useState } from 'react';



function App() {
//   const sunIcon = document.querySelector(".sun")
//   const moonIcon = document.querySelector(".moon")

// const userTheme = localStorage.getItem("theme");
// const systemTheme= window.matchMedia("(prefers-color-scheme:dark)").matches;

//  const iconToggle=()=> {
// moonIcon.classList.toggle("display-none");
// sunIcon.classList.toggle("display-none");
// }

// const themeCheck= () => {
//   if (userTheme=== "dark" || (!userTheme && systemTheme))
//   { document.documentElement.classList.add("dark");
// moonIcon.classList.add("display-none");
// return;
// }
// sunIcon.classList.add("display-none");
// }



  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle('dark'); 
  // };

  const { session } = useContext(AuthContext)

  return (
    <>
      <div>
      {/* <button
      className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button> */}
      {
        session ? <Landing /> : (
          <>
         <div className='box'>
          <h1 className='heading'>Login to continue</h1>
          <button className='sign-in-button'><Link to="/login">Login</Link></button>
          </div>
          </>
        )
      }
</div>
    </>
  )
}

export default App
