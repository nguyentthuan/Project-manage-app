import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateUser from './Components/Users/Create';
import IndexUser from './Components/Users/Index';




import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div className="container">
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/indexProject'} className="navbar-brand">PROJECTS MANAGER</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/createUser'} className="nav-link">Create User</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/indexUser'} className="nav-link">List User</Link>
                </li>

               
                
              </ul>
            </div>
          </nav> <br/>
          
          <Switch>
              <Route exact path='/createUser' component={ CreateUser } />            
              <Route path='/indexUser' component={ IndexUser } />

             
          </Switch>
        </div>
      </Router>
    </div>, document.getElementById('root'));


serviceWorker.unregister();
