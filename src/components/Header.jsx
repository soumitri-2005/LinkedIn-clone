import React from 'react'
import '../componentsCss/Header.css';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <img src="" alt="" />
        <div className="header-search">
            <SearchIcon />
            <input type="text" />
        </div>
      </div>

      <div className="header-right">

      </div>

    </div>
  )
}

export default Header
