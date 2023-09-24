import React, { useState, useEffect } from "react";
import axios from "axios";

function Friend() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch data from the Random User API
    axios.get("https://randomuser.me/api/?results=10").then((response) => {
      // Extract the list of friends from the API response
      const friendData = response.data.results;

      // Set the friends data in the state
      setFriends(friendData);
    });
  }, []);

  return (
    <div id="Friendlist">
      <h1>Friend List</h1>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <img src={friend.picture.thumbnail} alt={`Friend ${index}`} />
            <p>
              Name: {friend.name.first} {friend.name.last}
            </p>
            <p>Email: {friend.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friend;
