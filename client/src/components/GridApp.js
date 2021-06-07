import React from 'react'; 
import { connect } from 'react-redux'; 
import PersonList from './PersonList'; 
import Header from './Header'; 
import PersonListFilters from './PersonListFilters'; 
import PersonModal from './PersonModal'; 
import { resetPersons, selectPerson }  from '../actions/persons'; 
import selectPersons from '../selectors/persons'; 

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


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
      let qparams = '?sort=idasc'; //&limit=20';     // default params for initial API call
      let baseurl = 'api/personsAll'; 
      if (window.location.href.search("//localhost") > -1)   baseurl = 'http://localhost:3001/api/personsAll'; 
      // console.log('baseurl = ' + baseurl + qparams); 
      fetch(baseurl + qparams, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         console.log('tot recs = ' + result.tot + '; tot persons = ' + result.persons.length); 
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
         <React.Fragment>
            <Header />
            <Container className="main_container" maxWidth="xl">
               <CssBaseline />
               <Typography className="header__subtitle" variant="h2" id="tableTitle" component="div">
                  Final Results
               </Typography>

               <Grid container className="main_grid">
                  <Grid item xs={10} sm={4} md={3} lg={2} className="main_grid_filter">
                     <PersonListFilters /> 
                  </Grid>
                  <Grid item xs={12} sm={8} md={9} lg={10} >
                     <PersonList persons={this.props.persons}/>
                  </Grid>
               </Grid>
               <PersonModal 
                        selectedPerson={this.props.selectedPerson}
                        handleClearSelectedPerson={this.handleClearSelectedPerson}/>
            </Container>
         </React.Fragment>
      );
    }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters, 
//      persons: state.persons.plist, 
      persons: selectPersons(state.persons.plist, state.filters), 
      selectedPerson: state.persons.selectedPerson   
   }
}; 

export default connect(mapStateToProps)(GridApp);   