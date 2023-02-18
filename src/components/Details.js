import React from "react";

function Details({ title, views, createdAt, upvotes, downvotes, onSetDownvotes, onSetUpvotes }) {
    return (
        <div className="details">
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button onClick={onSetUpvotes}>{upvotes} 👍 </button>
            <button onClick={onSetDownvotes}>{downvotes} 👎 </button>
        </div>
    )
}

export default Details;