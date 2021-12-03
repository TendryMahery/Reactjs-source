import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <>
      <Router>
        <Navbar /> <br></br>
        <switch>
          <Route path='/' exact />
        </switch> 
      </Router>
        <Form />
      <List/>

    </>
    );
    
  }
  
export default App;

