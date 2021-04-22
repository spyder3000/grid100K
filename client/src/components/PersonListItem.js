// Export a stateless functional component -- props include  description, amount, createdAt, id

import React from 'react'; 
import { connect } from 'react-redux';
import { selectPerson }  from '../actions/persons';

// retrieves exactly one record via API call (for selected Person for Modal);  include 'dispatch' as a prop 
class PersonListItem extends React.Component {
   loadData (dat) {
   // fetch('http://localhost:3001/api/persons' + dat, {
   // fetch('./api/persons' + dat, {
      console.log('url = ' + window.location.href); 
      let baseurl = './api/persons/'; 
      if (window.location.href.search("//localhost") > -1)   baseurl = 'http://localhost:3001/api/persons/'; 
      console.log('baseurl = ' + baseurl); 
      fetch(baseurl + dat, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         this.props.dispatch(selectPerson(result));
      })
   }

   render() {
      return (
   <tr>
      <td>{this.props.id}</td>
      <td><button className="fakeButton" 
               onClick={(e) => {  
                  this.loadData(this.props.id);   
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

const mapStateToProps = (state) => {
   return {
      filters: state.filters,    
      persons: state.persons
   }
}

export default connect(mapStateToProps)(PersonListItem); 