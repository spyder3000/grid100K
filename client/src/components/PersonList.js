import React from 'react'; 
import { connect }  from 'react-redux'; 
import PersonListItem from './PersonListItem'; 
// import selectPersons from '../selectors/persons'; 

// regular unconnected component 
const PersonList = (props) => (
   <div>
      <h1>Contestants </h1>
      <span>total persons = {props.persons.length}</span>
      <table><tbody>
         <tr>
            <th>Entry Num</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>State</th>
            <th>Status</th>
            <th>Final Score</th>
         </tr>
         {props.persons.map((person) => {
            <span>{person.id}</span>
            // could have used expense={expense} as well, & then referenced as props.expense.amount, etc 
            return <PersonListItem key={person.id} {...person} />  // ...person includes all key/value properties;  referenced as props.score, etc
         })} 
         </tbody></table>

      {/*props.filters.text} 
      {props.persons.length*/} 
   </div>
)

export default PersonList; 

// ch 101 - this is the preferred syntax (compared to using a name such as ConnectedExpenseList (see below) )
// mapStateToProps specifies what we want to get off the store
/*
const mapStateToProps = (state) => {
   return {
      persons: state.persons   // passes this as props to the connected component;  
//      selectPersons(state.persons, state.filters),  // ch 102 - modifies to include filter/sort version of expenses
//      filters: state.filters  // don't really need this one 
   }
}; 
// connect() returns the fn, so need to specify parameters -- e.g. PersonList -- afterwards;  PersonList is what we want to connect
//  the export is the regular component with data from the store included 
export default connect(mapStateToProps)(PersonList);  // pulls all of this together
*/
