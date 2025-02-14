import './App.css';

import React, {useEffect} from "react";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import {About, Contact, Blog, Home} from "./pages";
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";


const App: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Route changed:", location.pathname);
    }, [location]);
    return (

        <><ResponsiveAppBar/>
            <Routes >
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Blog" element={<Blog/>}/>
                <Route path="/Home" element={<Home/>}/>

            </Routes>
            <Footer/>
        </>

    );
};

export default App;
