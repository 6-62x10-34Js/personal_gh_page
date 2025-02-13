// import logo from './logo.svg';
import './App.css';

import React from "react"; //, { useState }
import { Routes, Route } from "react-router-dom";
// import MenuBar from "./MenuBar/Menubar";
import { About, Contact, Blog } from "./pages";
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";



const App: React.FC = () => {
  return (
      <><ResponsiveAppBar/>
          <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>

          </Routes>

          <Footer/>
</>

  );
};

export default App;
