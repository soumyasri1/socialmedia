import React, { useState, useEffect } from "react";
import axios from "axios";
import Like from "./like";
import Comment from "./comment";

function Posts() {
  const [postText, setPostText] = useState(""); // State to store the post text
  const [posts, setPosts] = useState([]); // State to store the list of posts

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Send the post data to your backend server
      const response = await axios.post("http://localhost:8000/api/post", {
        text: postText,
      });

      // Check if the post was successfully created and returned by the server
      if (response.status === 201) {
        // Add the new post to the posts state
        setPosts((prevPosts) => [...prevPosts, response.data]);

        // Clear the postText input field
        setPostText("");
      } else {
        console.error("Failed to create the post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      // Send a DELETE request to your backend server to delete the post
      await axios.delete(`http://localhost:8000/api/post/${postId}`);

      // Remove the deleted post from the posts state
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Fetch posts from the server when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div id="post" className="post-container">
      <textarea
        id="post-area"
        className="post-textarea"
        placeholder="Your Post area"
        rows="20"
        cols="20"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <button
        id="createPost"
        className="post-button"
        type="submit"
        onClick={handleCreate}
      >
        Create Post
      </button>
      <div>
        {/* Display the list of posts */}
        <div id="individual-post-container">
          {posts.map((post) => (
            <div key={post._id} className="post">
              <p>{post.text}</p>
              <button
                className="post-delete-button"
                onClick={() => handleDelete(post._id)}
              >
                x
              </button>
              <div id="Like-area">
                <Like />
              </div>
              <div id="Comment-area">
                <Comment />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
