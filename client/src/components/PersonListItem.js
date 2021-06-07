// Export a stateless functional component -- props include  description, amount, createdAt, id

import React from 'react'; 
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { selectPerson }  from '../actions/persons';

// retrieves exactly one record via API call (for selected Person for Modal);  include 'dispatch' as a prop 
class PersonListItem extends React.Component {
   loadData (dat) {
      let baseurl = './api/persons/'; 
      if (window.location.href.search("//localhost") > -1)   baseurl = 'http://localhost:3001/api/persons/'; 
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
            <TableRow>
               <TableCell align="center" className="col col1">
                  {this.props.id}
               </TableCell>
               <TableCell align="left" className="col col2">
                  <Button className="fakeButton" href="#text-buttons" color="primary" 
                     onClick={(e) => { this.loadData(this.props.id);  }}>
                     {this.props.first_name} {this.props.last_name}
                  </Button>
               </TableCell>
               <TableCell align="center" className="col col3">{this.props.age}</TableCell>
               <TableCell align="center" className="col col4">{this.props.gender}</TableCell>
               <TableCell align="center" className="col col5">{this.props.state}</TableCell>
               <TableCell align="left" className="col col6">{this.props.professional}</TableCell>
               <TableCell align="right" className="col col7">{this.props.score}</TableCell>
            </TableRow>  
  ); 
}}

const mapStateToProps = (state) => {
   return {
      filters: state.filters,    
      persons: state.persons
   }
}

export default connect(mapStateToProps)(PersonListItem); 