import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Rec from "./components/Recommendation";
import Socials from "./components/sideLinks";
import Content from "./components/content";
import Register from "./components/Register"
import Footer from "./components/footer";
import Profile from "./components/Account";
import TestNav from "./components/NewNav";
import Welcome from './components/Welcome';
import Unauthorized from "./components/unauthorized";

function App() {
  return (
    <>
      <Router >
        <TestNav />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/acc' element={<Profile />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/recommendation' element={<Rec />} ></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path="/confirmed" element={<Welcome />} ></Route>
          <Route path="/unauthorized" element={<Unauthorized />} ></Route>
        </Routes>
        <Socials />
        <Footer />
      </Router>
      <ToastContainer />
      </>
  )
}

export default App;