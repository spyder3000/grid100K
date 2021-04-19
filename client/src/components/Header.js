import React from 'react'; 
import { NavLink} from 'react-router-dom'; 

// implicitly returns JSX
const Header = () => (
   <header>
      <h1>2021 Skills Competition </h1>
      <h2>Final Results</h2>
      {/*<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
   </header>
)

export default Header; 