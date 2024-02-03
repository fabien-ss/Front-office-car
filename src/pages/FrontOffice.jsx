import { Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/header/NavBar";
import List from "../components/list/List";
import React from "react";
import FrontOfficeComponents from "./FrontOfficeComponents";
import Notification from "../components/message/Notification";
import { Brand } from "../components/brand/Brand";

function FrontOffice(){
    return(
            <div class="container-xxl bg-white p-0">
                {/*<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>*/}
                <NavBar />
                <Header />
                    <Routes>
                        <Route path="/" element={<FrontOfficeComponents />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/notification" element={<Notification />}/>
                        <Route path="/brand" element={<Brand />}/>
                    </Routes>
                <Footer />
            </div>
    )
}

export default FrontOffice;