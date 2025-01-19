import React from 'react'
import '../componentsCss/Feed.css'
import { Avatar } from '@mui/material'
import InputOptions from './InputOptions'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed-input-container">
        <div className="input-text">
            <Avatar />
            <form>
                <input type="text" placeholder='Start a post, try writing with AI' />
                <button type='submit'>Send</button>
            </form>
        </div>
        <div className="input-icons">
            <InputOptions Icon={PermMediaIcon} title="Media" color="skyblue" />
            <InputOptions Icon={CalendarMonthIcon} title="Event" color="gold" />
            <InputOptions Icon={ArticleIcon} title="Write article" color="orange" />
        </div>
      </div>
    </div>
  )
}

export default Feed
