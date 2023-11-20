import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <>
      <button className="postButton">134 Posts</button>
      <div className="post">
        <div className="postOne">
          <h4 style={{ marginTop: "20px", fontWeight:"bold" }}>A Changing World Order</h4>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{
              color: "#e3db0d",
              marginTop: "20px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="postText">
          <p>
            The world is changing at a feverish pace. Friends, colleagues and
            everyone engaged in knowledge work are begining to sense this,
            including...
          </p>

          <div className="postDate">
            <p>
              <a href="/">musing</a> by anujgosalia
            </p>

            <p style={{marginLeft:"10px"}}>August 2-2 mins Read-102 views</p>

          </div>
        </div>

        <div className="postOne">
          <h4 style={{ marginTop: "20px" }}>Indian V/S Australia</h4>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{
              color: "#e3db0d",
              marginTop: "20px",
              marginLeft: "65px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="postText">
          <p>
            Think about it - this cricket series was akin to thearpy.
            <br />
            laying our childhood trauma up top, working with it slowly and
            surely over two m...
          </p>

          <div className="postDate">
            <p>
              <a href="/">thought</a> by anujgosalia
            </p>

            <p>January 21-1 mins Read-156 views</p>
          </div>
        </div>

        <div className="postOne">
          <h4 style={{ marginTop: "20px" }}>Write To Build</h4>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{
              color: "#e3db0d",
              marginTop: "20px",
              marginLeft: "105px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="postText">
          <p>
            Writing is the first step to create:
            <ul>
              <li>stories</li>
              <li>product</li>
              <li>companies</li>
            </ul>
          </p>

          <div className="postDate">
            <p>
              <a href="/">thought</a> by anujgosalia
            </p>
            <p>November 18-1 mins Read-228 views</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
