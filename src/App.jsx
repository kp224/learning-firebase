import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Landing from "./components/Landing/Landing.jsx";

import Signup from "./components/SignUp/Signup.jsx";

import Signin from "./components/SignIn/Signin.jsx";




import "./App.css";

function App() {
  return (
    <>
<BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="no-underline">Home</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/signup" className="no-underline">Sign Up</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signin" className="no-underline">Sign In</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
