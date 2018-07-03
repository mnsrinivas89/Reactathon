import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createHashHistory';
import Details from './containers/DetailContainer';;

export const history = createBrowserHistory();
class Routes extends Component {

 render() {
   return (
     <Router history={history}>
       <Switch> 
         <Route path="/" component={Details} />
       </Switch>
     </Router>

   );
 }

}
export default Routes;