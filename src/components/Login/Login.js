import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigate();

    const loginChangeHandler = (event) => {
        setLoginId(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        const loginDetails = {
            loginId: loginId,
            password: password
        }
        console.log("Login Details : ", loginDetails);
        navigation('/Home');
    }

  //   useEffect(() => {
  //       router.prefetch('/Home')
  // }, [])

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginSubmitHandler}>
                <label>Login Id</label>
                <input type={"text"} minLength={9} maxLength={9} onChange={loginChangeHandler}
                       required={true} value={loginId} placeholder={'Enter the login Id'} />
                <label>Password</label>
                <input type={"password"} minLength={8} onChange={passwordChangeHandler}
                       required={true} value={password} placeholder={'Enter the password'} />
                <button>Login</button>
            </form>
        </div>
    );
}