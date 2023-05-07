import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./Components/NavBar"
import * as React from 'react';
import Page from './Components/Page1';
import Help from './Components/Help1';
import {Routes,Route} from 'react-router-dom';
import Todo from './TodoComponents/Todo';

function App() {
  return (
    <>
      <BasicExample />
      <div className="container page-css main-content">
       <Todo/> 
      </div>
    </>
  );
}

export default App;
