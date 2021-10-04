import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from './components/context';
import './index.scss';
import { Page404 } from './pages/404';
import { Error } from './pages/error';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { MyOffers } from './pages/myOffers';
import { NewOffer } from './pages/newOffer';
import { Signup } from './pages/signup';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/myOffers' component={MyOffers} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/newOffer' component={NewOffer} />
          <Route path='/error' component={Error} />
          <Route component={Page404} />
        </Switch>
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
