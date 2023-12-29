import React from "react";

const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://static.toiimg.com/thumb/msid-106362161,imgsize-25980,width-400,resizemode-4/106362161.jpg"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>
            At 1.5L units, MMR records highest flat sales among top 7 cities in
            2023
          </h2>
          <p className="info">
            <a href="/" className="author">
              SUJEET MEHRA
            </a>
            <time>2023-12-29</time>
          </p>
          <p className="summary">
            MUMBAI: The Mumbai Metropolitan Region (MMR) recorded the highest
            sale of apartments among the top seven cities in 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
