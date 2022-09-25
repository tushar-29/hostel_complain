import React from "react";
import classes from "./card.module.css";
import {Link, useLocation} from "react-router-dom";


export default function Card(props) {

    const location = useLocation();

    return(
        <Link className={classes.card} to={`${location.pathname}/${props.title}`}>
            <h3>{props.title}</h3>
        </Link>
    );
}
