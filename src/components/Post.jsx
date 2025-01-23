import React, { forwardRef } from "react";
import "../componentsCss/Post.css";
import { Avatar } from "@mui/material";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import InputOptions from "./InputOptions";

const Post= forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <hr />

      <div className="post-buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="var(--font-bold-color)" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="var(--font-bold-color)" />
        <InputOptions Icon={ShareOutlined} title="Share" color="var(--font-bold-color)" />
        <InputOptions Icon={SendOutlined} title="Repost" color="var(--font-bold-color)" />
      </div>
    </div>
  );
})

export default Post;
