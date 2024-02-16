import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../Pages/Home/Home";

const Router=()=>{

    return(
    <Routes>
        <Route>
            <Route path="/" element={<Home/>} />
        </Route>
    </Routes>
    )
    
}

export default Router