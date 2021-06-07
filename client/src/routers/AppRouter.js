import React from 'react';   
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import GridApp from './../components/GridApp'; 
import NotFoundPage from './../components/NotFoundPage'; 

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Switch>
            <Route path='/' component={GridApp} exact={true} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
)

export default AppRouter; 

