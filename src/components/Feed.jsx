import React, { useEffect, useState } from "react";
import "../componentsCss/Feed.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-input-container">
        <div className="input-text">
          <Avatar />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
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

      <div className="divison">
        <hr className="division-line" />
        <p>Sort by: Top</p>
      </div>

      {/* post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
