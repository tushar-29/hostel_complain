import React from "react";
import classes from './navbar.module.css';
import {NavLink} from "react-router-dom";


export default function Navbar() {


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Project</div>
      <nav>
        <ul>
          <li><NavLink to={'/Home'} >Home</NavLink></li>
          <li><NavLink to={'/User'}>User</NavLink></li>
          <li><NavLink to={'/ComplainLog'}>Complain</NavLink></li>
          <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
