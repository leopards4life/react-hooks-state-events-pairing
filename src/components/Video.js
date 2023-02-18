import React, { useState } from "react";
import Details from "./Details";
import CommentButton from "./CommentButton";

function Video({ video }) {
    const [downvotes, setDownvotes] = useState(video.downvotes);
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [toggle, setToggle] = useState("false");

    function handleSetToggle() {
        setToggle(toggle => !toggle);
    }

    function handleSetUpvotes() {
        setUpvotes(upvotes => upvotes + 1);
    }

    function handleSetDownvotes() {
        setDownvotes(downvotes => downvotes + 1);
    }

    return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details 
      title={video.title}
      views={video.views}
      createdAt={video.createdAt}
      downvotes={downvotes}
      onSetDownvotes={handleSetDownvotes}
      onSetUpvotes={handleSetUpvotes}
      upvotes={upvotes}
      />
      <CommentButton 
      toggle={toggle}
      onSetToggle={handleSetToggle}
      comments={video.comments}
      />
    </div>
    )
}

export default Video;