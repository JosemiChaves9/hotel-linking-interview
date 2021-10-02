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
import { OffersForm } from './pages/offersForm';
import { Signup } from './pages/signup';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/myOffers' component={MyOffers} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/newOffer' component={OffersForm} />
          <Route path='/error' component={Error} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
