// import logo from './logo.svg';
import './App.css';

import React, {useEffect} from "react"; //, { useState }
import {Routes, Route, useLocation} from "react-router-dom";
// import MenuBar from "./MenuBar/Menubar";
import { About, Contact, Blog, Home } from "./pages";
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";



const App: React.FC = () => {
    const location = useLocation();

  useEffect(() => {
    console.log("Route changed:", location.pathname);
  }, [location]);
  return (

      <><ResponsiveAppBar/>
          <Routes>
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
