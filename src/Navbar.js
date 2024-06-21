import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/diary" className="nav-item">
        <img src="icons/diary-icon.png" alt="日記" />
        <span>日記</span>
      </Link>
      <Link to="/airquality" className="nav-item">
        <img src="icons/leaf-icon.png" alt="空氣" />
        <span>空氣</span>
      </Link>
      <Link to="/reminder" className="nav-item">
        <img src="icons/notify-icon.png" alt="提醒" />
        <span>提醒</span>
      </Link>
      <Link to="/stats" className="nav-item">
        <img src="icons/statistics-icon.png" alt="統計" />
        <span>統計</span>
      </Link>
      <Link to="/profile" className="nav-item">
        <img src="icons/me-icon.png" alt="我" />
        <span>我</span>
      </Link>
    </div>
  );
};

export default Navbar;
