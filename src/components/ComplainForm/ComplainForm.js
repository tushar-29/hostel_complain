import React from "react";
import {useEffect, useState} from "react";
import {useUser} from "../../utils/reducer/userContext";


export default function ComplainForm(props) {

    const [complainData, setComplainData] = useState({
        title: "",
        description: "",
    });
    const [{ user }, dispatch] = useUser();

    console.log("user data in complain adding", user);
    const userId = user.id;


    const complainChangeHandler = (event) => {
        const dataName = event.target.name;
        const dataValue = event.target.value;

        setComplainData(prevState => {
            prevState[dataName] = dataValue;
            return({...prevState})
        })
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const date = new Date();
        const reqDate = {
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear(),
        }
        const ComplainData = {
            title: complainData.title,
            description: complainData.description,
            department: props.title,
            date: reqDate
        }
        console.log("DATE = ", reqDate);
        console.log("user id = ", userId);

        try {
            const response = await fetch(`/api/complain/${userId}`, {
                method: 'POST',
                body: JSON.stringify(ComplainData),
                headers: {'Content-Type': 'application/json'},
            }).catch(err => {
                console.log(err);
            });

            if (!response.ok)
                throw new Error("Complain POST REQUEST FAILS");

            const data = await response.json().catch(err => {
                console.log(err);
                console.log("COMPLAIN RESPONSE JSON ERROR");
            });
            console.log("front end complain data returned = ", data);

        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {

    }, [])

    return(
        <div>
            <h1>{props.title}</h1>
            <form onSubmit={formSubmitHandler}>
                <h3>Issue Title</h3>
                <input type={"text"} name={"title"}
                       value={complainData.title} onfocusout={complainChangeHandler} />
                <h3>Issue Description</h3>
                <textarea name={"description"}
                          value={complainData.description} onfocusout={complainChangeHandler}/>
                <br />
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
}
