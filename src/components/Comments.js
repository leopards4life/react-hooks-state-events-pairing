import React from "react";

function Comments({ comments }) {
    const commentList = comments.map(comment => {
        return (
        <div>
            <span className="weighted">{comment.user}</span>
            <p className="normal">{comment.comment}</p>
        </div>
    )}
    )
    return (
        <div className="comments">
            <h2>{comments.length} Comments</h2>
            {commentList}
        </div>
    )
}

export default Comments;