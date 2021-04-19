// Export a stateless functional component -- props include  description, amount, createdAt, id

import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { selectPerson }  from '../actions/persons';
// import { removeExpense } from '../actions/expenses'; 



// include 'dispatch' as a prop in the listing here;  along with id, amount, etc 
class PersonListItem extends React.Component {
   loadData (dat) {
      let qparams = ''; 
      console.log(dat); 
      fetch('http://localhost:3001/api/persons/' + dat, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         console.log('API Call return'); 
         console.log(result); 
         // this.props.dispatch(resetPersons(result.persons));
         this.props.dispatch(selectPerson(result));
      })
   }

   render() {
      return (
//const PersonListItem = ({ dispatch, id, age, first_name, last_name, state, gender, score, professional }) => (
   <tr>
      <td>{this.props.id}</td>
      <td><button className="fakeButton" 
               onClick={(e) => {  // will update store with modified value in Select List
                  // this.setState({ pagenum: newPage})
                  this.loadData(this.props.id);   // {...this.state, pagenum: newPage});  
               }}
            >
               {this.props.first_name} {this.props.last_name}
            </button></td>
      <td>{this.props.age}</td>
      <td>{this.props.gender}</td>
      <td>{this.props.state}</td>
      <td>{this.props.professional}</td>
      <td>{this.props.score}</td>
   </tr>
)
         }}

// export default PersonListItem;  

const mapStateToProps = (state) => {
   return {
      filters: state.filters,   // will allow PersonListFilters access to Redux Store filters
      persons: state.persons
   }
}

export default connect(mapStateToProps)(PersonListItem); 