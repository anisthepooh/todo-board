import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App'; 

function Frontpage() {
  return (
    <Router>
        <div>
            <h1>Welcome!</h1>
        </div>
        <div>
            <Route path='/App' component={App}/> 
        </div>
    </Router>
  )
}

export default Frontpage