import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom';

import Home from '../Home/index';
import Login from '../Login/index';
import Panel from '../Panel/index';
import Accounts from '../Accounts/index';
import Transfers from '../Transfers/index';
import Cards from '../Cards/index';
import Transactions from '../Transactions/index';
import Help from '../Help/index';

import './app.css';

class App extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <Router>
            <div className="App">
               <nav>
                  <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/login">Login</Link></li>
                     <li><Link to="/panel">Panel</Link></li>
                     <li><Link to="/accounts">Accounts</Link></li>
                     <li><Link to="/transfers">Transfers</Link></li>
                     <li><Link to="/cards">Cards</Link></li>
                     <li><Link to="/transactions">Transactions</Link></li>
                     <li><Link to="/help">Help</Link></li>
                  </ul>
               </nav>

               <section className="container">
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/panel" component={Panel} />
                  <Route path="/accounts" component={Accounts} />
                  <Route path="/transfers" component={Transfers} />
                  <Route path="/cards" component={Cards} />
                  <Route path="/transactions" component={Transactions} />
                  <Route path="/help" component={Help} />
               </section>

            </div>
         </Router>
      );
   }
}

export default App;