import React, { useState } from "react";
import "../componentsCss/Feed.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="input-text">
          <Avatar />
          <form>
            <input
              type="text"
              placeholder="Start a post, try writing with AI"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="input-icons">
          <InputOptions Icon={PermMediaIcon} title="Media" color="skyblue" />
          <InputOptions Icon={CalendarMonthIcon} title="Event" color="gold" />
          <InputOptions
            Icon={ArticleIcon}
            title="Write article"
            color="orange"
          />
        </div>
      </div>

      <hr />

      {/* post */}
      {posts.map((post) => (
        <Post />
      ))}
      <Post name="Sony Singh" description="This is a test" message="Hello" />
    </div>
  );
}

export default Feed;
