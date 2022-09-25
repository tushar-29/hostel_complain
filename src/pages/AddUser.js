import React, {Fragment, useState} from "react";
import {useUser} from "../utils/reducer/userContext";


export default function AddUser() {
    const [addDetail, setAddDetail] = useState({
        name: "",
        regNo: "",
        phoneNo: "",
        hostelNo: "",
        wing: "",
        roomNo: "",
        pName: "",
        pNumber: "",
    });

    const [{ user }, dispatch] = useUser();


    const valueChangeHandler = (event) => {
        const reqValue = event.target.value;
        const reqName = event.target.name;

        setAddDetail(prevState => {
            prevState[reqName] = reqValue;
            return({...prevState});
        });
    }

    const addSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("frontend = ", addDetail);

        try {
            const response = await fetch('/api/add', {
                method: 'POST',
                body: JSON.stringify(addDetail),
                headers: {'Content-Type': 'application/json'},
            }).catch(err => {
                console.log(err);
            });

            if (!response.ok)
                throw new Error("POST REQUEST FAILS");

            const data = await response.json().catch(err => {
                console.log(err);
                console.log("RESPONSE JSON ERROR");
            });
            console.log("front end data returned = ", data);
            console.log(data.test._id);
            localStorage.setItem('id', data.test._id);
            dispatch({
                type:'ADD_USER',
                userData: data.test
            });

        } catch (err) {
            console.log(err.message);
        }
    };


    return(
        <Fragment>
            <h1>Add Student</h1>
            <form onSubmit={addSubmitHandler}>
                <p>Name : </p>
                <input type={"text"} value={addDetail.name} onChange={valueChangeHandler} name={'name'} />
                <p>Reg No. : </p>
                <input type={"text"} value={addDetail.regNo} onChange={valueChangeHandler} name={'regNo'} />
                <p>Phone no. : </p>
                <input type={"text"} value={addDetail.phoneNo} onChange={valueChangeHandler} name={'phoneNo'}/>
                <p>Hostel No. : </p>
                <input type={"number"} min={0} max={6} value={addDetail.hostelNo} onChange={valueChangeHandler} name={'hostelNo'} />
                <p>Wing : </p>
                <input type={"text"} minLength={1} maxLength={1} value={addDetail.wing} onChange={valueChangeHandler} name={'wing'}/>
                <p>Room no. : </p>
                <input type={"number"} value={addDetail.roomNo} onChange={valueChangeHandler} name={'roomNo'}/>
                <p>Parent Name : </p>
                <input type={"text"} value={addDetail.pName} onChange={valueChangeHandler} name={'pName'} />
                <p>Parent No. : </p>
                <input type={"text"} value={addDetail.pNumber} onChange={valueChangeHandler} name={'pNumber'}/>
                <br />
                <button type={"submit"}>Submit</button>
            </form>
        </Fragment>
    );
}
