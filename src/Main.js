import React from 'react';
import {Routes, Route, Outlet} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";
import ComplainLog from "./pages/ComplainLog";
import Cleaning from "./pages/issue/Cleaning";
import Carpentry from "./pages/issue/Carpentry";
import Plumbing from "./pages/issue/Plumbing";
import Wifi from "./pages/issue/Wifi";
import Notification from "./pages/issue/Notification";
import Electrical from "./pages/issue/Electrical";
import AddUser from "./pages/AddUser";
import Layout from "./components/Layout/layout";


export default function Main() {


    return (
        <Layout>
            <Routes>
                <Route path={"/Add"} element={<AddUser />} />
                <Route path={"/"} element={<LoginPage />} />
                <Route path={"/Home"} element={<HomePage />}>
                    <Route path={"Cleaning"} element={<Cleaning />} />
                    <Route path={"Carpentry"} element={<Carpentry />} />
                    <Route path={"Plumbing"} element={<Plumbing />} />
                    <Route path={"Wifi"} element={<Wifi />} />
                    <Route path={"Notification"} element={<Notification />} />
                    <Route path={"Electrical"} element={<Electrical />} />
                </Route>
                <Route path={"/User"} element={<UserPage />} />
                <Route path={"/ComplainLog"} element={<ComplainLog />} />
            </Routes>
        </Layout>
    );
}
