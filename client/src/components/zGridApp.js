import React from 'react'; 
import { connect } from 'react-redux'; 
import PersonList from './PersonList'; 
import PersonListFilters from './PersonListFilters'; 
import { getData } from '../services/index'; 
//import {useEffect, useState} from 'react'

// export default class GridApp extends React.Component  {
class GridApp extends React.Component {   
   state = {
   //   filters: [], 
      persons: [], 
      total: 0, 
      selectedPerson: undefined   // for Modal??
   }; 

   componentDidMount() {
      // try-catch will handle any invalid JSON;  sets to empty array if not valid
      try {
         const data = getData(this.props.filters); 
         console.log('aaaa'); 
         console.log(data);  
/*        console.log('componentDidMount - fetching data');
        console.log(this.props.filters); 
        let qparams = ''; 
        if (this.props.filters.sort && this.props.filters.pagenum && this.props.filters.displaynum) {
           console.log('aaa'); 
            let x = (parseInt(this.props.filters.pagenum) + 1).toString(); 
            console.log('x = ' + x); 
            qparams = '?sort=' + this.props.filters.sort + '&limit=' + this.props.filters.displaynum + '&skip=' + x;  
            console.log(qparams); 
        }
            
      //   fetch('/api/')
      //   .then(({ results }) => this.setState({ persons: results }))
      //   .then(console.log(this.state.persons.length)); 
         fetch('http://localhost:3001/api/personsFilter' + qparams, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
         }})
            .then(res => res.json())
            .then((result) => {
               console.log(result); 
//               console.log('result length = ' + result.dat.length); 
               this.setState({persons: result.persons, total: result.tot}) 
//               this.setState({ persons: result }); 
               console.log('persons tot = ' + this.state.persons.length); 
               console.log('tot recs avail = ' + this.state.total)
            })
        console.log('returned');  */
      } catch (e) {
         console.log('failure of some sort'); 
        // Do Nothing -- falls back to empty array
      }
    }

    render() {
      // const title = 'Indecision';   // if commented & removed from <Header />, will use default value specified via Header.defaultProps
      // const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
            <PersonListFilters />
            <PersonList persons={this.state.persons}/>
        <p>{this.state.persons.length}</p>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters, 
      persons: state.persons    
   }
}; 

export default connect(mapStateToProps)(GridApp);   