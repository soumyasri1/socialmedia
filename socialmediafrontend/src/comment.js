import React, { useState } from "react";

function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  return (
    <div className="comment-container">
      <div className="comment-toggle" onClick={toggleCommentInput}>
        Comment
      </div>
      {showCommentInput && (
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={handleCommentChange}
            className="comment-input"
          />
          <button onClick={handleAddComment} className="add-button">
            Add Comment
          </button>
        </div>
      )}
      <div className="comment-list">
        {comments.map((comment, index) => (
          <p key={index} className="comment-item">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Comment;
