import React from 'react';
import {Route, Routes} from "react-router-dom";
import LoginEmail from "../pages/LoginEmail/LoginEmail";
import LoginPassword from "../pages/LoginPassword/LoginPassword";
import Logged from "../pages/Logged/Logged";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route index element={<LoginEmail/>}/>
                <Route path={"password"} element={<LoginPassword/>}/>
                <Route path={"logged"} element={<Logged/>}/>

            </Routes>
        </div>
    );
};

export default Routing;