import React from 'react'; 
import PersonListItem from './PersonListItem'; 

const PersonList = (props) => (
   <div>
      <h2 className="table-intro">Contestants </h2>
      <table className="table"><tbody>
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
            return <PersonListItem key={person.id} {...person} />  // ...person includes all key/value properties;  referenced as props.score, etc
         })} 
         </tbody></table>
   </div>
)

export default PersonList; 
