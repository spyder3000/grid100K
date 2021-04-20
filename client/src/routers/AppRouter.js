import React from 'react';   
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 
import GridApp from './../components/GridApp'; 
import NotFoundPage from './../components/NotFoundPage'; 
import Header from './../components/Header'; 

const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path='/' component={GridApp} exact={true} />
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
)

export default AppRouter; 

