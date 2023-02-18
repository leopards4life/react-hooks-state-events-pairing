import React from "react";
import Comments from "./Comments";

function CommentButton({ onSetToggle, toggle, comments }) {
    return (
        <div>
            <button onClick={onSetToggle}>{toggle ? "Hide Comments" : "Show Comments"}</button>
            {toggle ? 
            <Comments 
            comments={comments}/> : null}
        </div>
    )
}

export default CommentButton;