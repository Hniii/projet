import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import MasterLayout  from './layouts/admin/MasterLayout';
import Home  from './components/frontend/Home';
import Login  from './components/frontend/users/Login';
import Adduser  from './components/frontend/users/Adduser';
import Navbar from './layouts/frontend/Navbar';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/adduser" component={Adduser}/>
            <Route exact path="/navbar" component={Navbar}/>
            <Route path="/admin"name="Admin" render={(props) => <MasterLayout {...props}/> } />
           
         </Switch>
      </Router>
    </div>
  );
}

export default App;
