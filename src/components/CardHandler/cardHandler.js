import React from "react";
import cardInfo from "./cardInfo";
import classes from "./cardHandler.module.css";
import Card from "../Card/card";


export default function CardHandler() {

    return(
        <div className={classes.cardHandler}>
            {
                cardInfo.map(card => (
                    <Card key={card.id} title={card.title} />
                ))
            }
        </div>
    );
}
