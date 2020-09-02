import React, { useState }from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Login from "./Login.js"
import {useStateValue} from "./StateProvider"
function App() {

  const [{user}, dispatch] = useStateValue(null);

  return (
    // BEM naming convention
    <div className="App">
      {!user ?
      (
        <Login />
      ):(
      <div className="app__body">
        <Router>
        <Sidebar />
          <Switch>
        <Route path="/rooms/:roomId">
        <Chat />
            </Route>
            <Route path='/'>
              
            </Route>
        </Switch>
        </Router>
      </div>)}
    </div>
  );
}

export default App;
