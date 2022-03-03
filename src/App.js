import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home"
import Login from "./components/Login"
import About from "./components/About"
import Rec from "./components/Recommendation"
import Navbar from "./components/Navbar"
import Socials from "./components/sideLinks"
import Content from "./components/content";
import Register from "./components/Register"
import Footer from "./components/footer";
import Profile from "./components/Account";

function App(props) {
  return (
    <>
      <Router >
        <Navbar loggedin={props.isLogged} name={props.name} />
        <Socials />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/acc' element={<Profile />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/recommendation' element={<Rec />} ></Route>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
      </>
  )
}

export default App;