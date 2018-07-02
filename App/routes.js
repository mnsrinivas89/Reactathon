import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createHashHistory';
// import LandingPage from './containers/LandingPage/landingPage';
// import ActivateNew from './containers/ActivateNew/index';

export const history = createBrowserHistory();
class Routes extends Component {

 render() {
   return (
     <Router history={history}>
       <Switch> 
         <Route path="/" component={LandingPage} />
       </Switch>
     </Router>

   );
 }

}
export default Routes;