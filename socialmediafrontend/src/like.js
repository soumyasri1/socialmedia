import React, { useState } from "react";


function Like() {
  const [likes, setLikes] = useState(0);

  const handleLike = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return (
    <div id="Like-container">
      <button id="Like-button" onClick={handleLike}>
        Like
      </button>
      <p id="Like-likes">{likes} Likes</p>
    </div>
  );
}

export default Like;
