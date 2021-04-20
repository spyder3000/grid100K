import React from 'react'; 
import { connect } from 'react-redux'; 
import PersonList from './PersonList'; 
import PersonListFilters from './PersonListFilters'; 
import PersonModal from './PersonModal'; 
import { resetPersons, selectPerson }  from '../actions/persons'; 

class GridApp extends React.Component {   
   state = {
      total: 0,                     // total records identified from Server using current filters 
      selectedPerson: undefined   // used to trigger Modal popup for person
   } 

   handleClearSelectedPerson = () => {
      this.props.dispatch(selectPerson({}));
   }; 

   // initial populate of Home page grid
   loadData () {
      let qparams = '?sort=idasc&limit=20';     // default params for initial API call
      fetch('http://localhost:3001/api/personsFilter' + qparams, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         this.props.dispatch(resetPersons(result.persons, result.tot));
      })
   }

   componentDidMount() {
      // try-catch will handle any invalid JSON;  sets to empty array if not valid
      try {
         this.loadData(); 
      } catch (e) {
         console.log('API call failure'); 
        // Do Nothing -- falls back to empty array
      }
    }

    render() {
      return (
        <div className="container home_page">
            <h2 className="header__subtitle">Final Results</h2>
            <PersonListFilters />
            <PersonList persons={this.props.persons}/>
            <PersonModal 
                  selectedPerson={this.props.selectedPerson}
                  handleClearSelectedPerson={this.handleClearSelectedPerson}/>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters, 
      persons: state.persons.plist, 
      selectedPerson: state.persons.selectedPerson   
   }
}; 

export default connect(mapStateToProps)(GridApp);   