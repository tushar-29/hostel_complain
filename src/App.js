import React from "react";
import Main from "./Main";
import {initialState, setUser} from "./utils/reducer/reducer";
import {UserDataProvider} from "./utils/reducer/userContext";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <UserDataProvider initialState={initialState} setUser={setUser}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
