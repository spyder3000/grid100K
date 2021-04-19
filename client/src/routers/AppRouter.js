import React from 'react';   // using ES6 syntax for React;  
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; 
import GridApp from './../components/GridApp'; 
// import AddExpensePage from './../components/AddExpensePage'; 
// import EditExpensePage from './../components/EditExpensePage'; 
// import HelpPage from './../components/HelpPage'; 
import NotFoundPage from './../components/NotFoundPage'; 
import Header from './../components/Header'; 


// Switch will stop after we find the first match -- will not match > 1 Route
const AppRouter = () => (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path='/' component={GridApp} exact={true} />
            {/* <Route path='/create' component={AddPersonPage}/> 
            <Route path='/edit/:id' component={EditPersonPage}/>  */}
            <Route component={NotFoundPage} />
         </Switch>
      </div>
   </BrowserRouter>
)

export default AppRouter; 

