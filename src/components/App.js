import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = ()=>{
  return (
    <div>
      <Link to="/pageTwo">Navigate to page 2</Link>
    </div>)
};

const PageTwo = ()=> {
  return (
    <div>
      PageTwo
      <button>Click me</button>
      <Link to="/">Navigate to page 1</Link>
      </div>)
};


const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}/>
          <Route path="/pageTwo" component={PageTwo}/>        
        </div>
      </BrowserRouter>
    </div>)
}
export default App;
