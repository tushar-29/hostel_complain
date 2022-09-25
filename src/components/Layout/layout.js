import React from "react";
import classes from './Layout.module.css';
import Navbar from "../Navbar/navbar";


export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
