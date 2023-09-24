import React, { useState } from "react";
import Posts from "./posts";
import { useLocation } from "react-router-dom";


function Home() {
  
  const location = useLocation();
  const isLoggedIn = location.state?.isLoggedIn || false;
   
  

  return (
    <div id="homepage">
      {isLoggedIn ? (
        <div id="content">
          <div id="profilepic">
            <img
              src="https://cdn.wallpapersafari.com/67/44/FH0LVU.jpg"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
      ) : null}
      {isLoggedIn ? (
        <div id="post-feed">
          <Posts isLoggedIn={isLoggedIn} />
        </div>
      ) : null}
      {!isLoggedIn ? (
        <h1 id="welcometext">
        *** Welcome to Connectopia***,
          <img src="https://play-lh.googleusercontent.com/SH5g2hL7KtShsFcDteWieAQH1Uz3UbZE_gwxWJHmoOsnZlN7SRe0UIxsii34NSFxvwE" />Please Signup and sign in to continue
        </h1>
      ) : null}
    </div>
  );
}

export default Home;
