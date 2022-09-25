import React from "react";
import ComplainForm from "../ComplainForm/ComplainForm";


export default function IssueComp(props) {


    return(
        <div>
            {/*<h1>{props.title}</h1>*/}
            <ComplainForm title={props.title} />
        </div>
    );
}
