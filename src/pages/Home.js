import React from 'react';
import CardHandler from "../components/CardHandler/cardHandler";
import {Outlet} from "react-router-dom";

export default function HomePage() {

    return (
        <div>
            <h1>Home Page</h1>
            <CardHandler />
            <Outlet />
        </div>
    );
}
