import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignUpForm from './Components/SignUpForm';
import SignInForm from './Components/SignInForm';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/SignUpForm" element={ <SignUpForm/>} />
      </Routes>
      <Routes>
        <Route path="/SignInForm" element={ <SignInForm/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
