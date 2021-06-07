import React from 'react'; 
import { connect } from 'react-redux'; 
import { resetPersons }  from '../actions/persons';
import { setTextFilter, sortByIdAsc, sortByIdDesc, sortByScoreAsc, sortByScoreDesc, 
         sortByNameAsc, sortByNameDesc, sortByAgeAsc, sortByAgeDesc, 
         sortByGenderAsc, sortByGenderDesc, sortByStateAsc, sortByStateDesc,
         sortByStatusAsc, sortByStatusDesc, 
         setAge, setScore, setGender, setState }  from '../actions/filters';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class PersonListFilters extends React.Component {
   onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
   };
   onSortChange = (e) => {
      if (e.target.value === 'idasc') {
         this.props.sortByIdAsc();
      } else if (e.target.value === 'iddesc') {
         this.props.sortByIdDesc();
      } else if (e.target.value === 'scoreasc') {
         this.props.sortByScoreAsc();
      } else if (e.target.value === 'scoredesc') {
         this.props.sortByScoreDesc();
      } else if (e.target.value === 'nameasc') {
         this.props.sortByNameAsc();
      } else if (e.target.value === 'namedesc') {
         console.log('Select sortByNAMEDesc'); 
         this.props.sortByNameDesc();
      } else if (e.target.value === 'ageasc') {
         this.props.sortByAgeAsc();
      } else if (e.target.value === 'agedesc') {
         this.props.sortByAgeDesc();               
      } else if (e.target.value === 'genderasc') {
         this.props.sortByGenderAsc();
      } else if (e.target.value === 'genderdesc') {
         this.props.sortByGenderDesc();  
      } else if (e.target.value === 'stateasc') {
         this.props.sortByStateAsc();
      } else if (e.target.value === 'statedesc') {
         this.props.sortByStateDesc();  
      } else if (e.target.value === 'statusasc') {
         this.props.sortByStatusAsc();
      } else if (e.target.value === 'statusdesc') {
         this.props.sortByStatusDesc();        
      }
   };
   onAgeChange = (e) => {
      this.props.setAge(e.target.value);
   };
   onScoreChange = (e) => {
      this.props.setScore(e.target.value);
   };
   onGenderChange = (e) => {
      this.props.setGender(e.target.value);
   };
   onStateChange = (e) => {
      console.log('onStateChange = ' + e.target.value);
      this.props.setState(e.target.value);
   };
  
   render() {
      return (
         <Container maxWidth="lg" className="filter_grid">
            <Paper className="filter_paper">
            
               {/*<FormControl className="form_control" variant="outlined">
                  <InputLabel id="sort_label" className="sort_label">Sort</InputLabel>
                  <Select
                     labelId="choose_sort"
                     label="Sort"
                     id="choose_sort"
                     value={this.props.filters.sortBy}
                     //onChange={(e) => { this.setState({ sortBy: e.target.value})  }}
                     onChange={this.onSortChange}
                  >
                     <MenuItem value={"scoreasc"}>Score (Asc)</MenuItem>
                     <MenuItem value={"scoredesc"}>Score (Desc)</MenuItem>
                     <MenuItem value={"nameasc"}>Name (Asc)</MenuItem>
                     <MenuItem value={"namedesc"}>Name (Desc)</MenuItem>
                     <MenuItem value={"ageasc"}>Age (Asc)</MenuItem>
                     <MenuItem value={"agedesc"}>Age (Desc)</MenuItem>
                     <MenuItem value={"idasc"}>Entry Num (Asc)</MenuItem>
                     <MenuItem value={"iddesc"}>Entry Num (Desc)</MenuItem>
                     <MenuItem value={"genderasc"}>Gender (Asc)</MenuItem>
                     <MenuItem value={"genderdesc"}>Gender (Desc)</MenuItem>
                     <MenuItem value={"stateasc"}>State (Asc)</MenuItem>
                     <MenuItem value={"statedesc"}>State (Desc)</MenuItem>
                     <MenuItem value={"statusasc"}>Status (Asc)</MenuItem>
                     <MenuItem value={"statusdesc"}>Status (Desc)</MenuItem>
                  </Select>
               </FormControl> */}

               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="age_label" className="age_label">Age</InputLabel>
                  <Select
                     labelId="choose_age"
                     label="Age"
                     id="choose_age"
                     value={this.props.filters.age}
                     // onChange={(e) => { this.setState({ age: e.target.value})  }}
                     onChange={this.onAgeChange}
                  >
                     <MenuItem value={"0"}>None</MenuItem>
                     <MenuItem value={"1"}>1-10</MenuItem>
                     <MenuItem value={"2"}>11-20</MenuItem>
                     <MenuItem value={"3"}>21-30</MenuItem>
                     <MenuItem value={"4"}>31-40</MenuItem>
                     <MenuItem value={"5"}>41-50</MenuItem>
                     <MenuItem value={"6"}>51-60</MenuItem>
                     <MenuItem value={"7"}>61-70</MenuItem>
                     <MenuItem value={"8"}>71-80</MenuItem>
                     <MenuItem value={"9"}>81-90</MenuItem>
                     <MenuItem value={"10"}>91-100</MenuItem>
                  </Select>
               </FormControl>

               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="score_label" className="score_label">Score</InputLabel>
                  <Select
                     labelId="choose_score"
                     label="Score"
                     id="choose_score"
                     value={this.props.filters.score}
                     // onChange={(e) => { this.setState({ score: e.target.value})  }}
                     onChange={this.onScoreChange}
                  >
                     <MenuItem value={"0"}>None</MenuItem>
                     <MenuItem value={"10"}>455-500</MenuItem>
                     <MenuItem value={"9"}>405-450</MenuItem>
                     <MenuItem value={"8"}>355-400</MenuItem>
                     <MenuItem value={"7"}>305-350</MenuItem>
                     <MenuItem value={"6"}>255-300</MenuItem>
                     <MenuItem value={"5"}>205-250</MenuItem>
                     <MenuItem value={"4"}>155-200</MenuItem>
                     <MenuItem value={"3"}>105-150</MenuItem>
                     <MenuItem value={"2"}>55-100</MenuItem>
                     <MenuItem value={"1"}>0-50</MenuItem>
                  </Select>
               </FormControl>

               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="gender_label" className="gender_label">Gender</InputLabel>
                  <Select
                     labelId="choose_gender"
                     label="Gender"
                     id="choose_gender"
                     value={this.props.filters.gender}
                     onChange={this.onGenderChange}
                  >
                     <MenuItem value={"X"}>None</MenuItem>
                     <MenuItem value={"M"}>Male</MenuItem>
                     <MenuItem value={"F"}>Female</MenuItem>
                  </Select>
               </FormControl>

               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="state_label" className="state_label">State</InputLabel>
                  <Select
                     labelId="choose_state"
                     label="State"
                     id="choose_state"
                     value={this.props.filters.stateXX}
                     onChange={this.onStateChange}
                  >
                        <MenuItem value={"XX"}>None</MenuItem>
                        <MenuItem value={"AL"}>AL</MenuItem>
                        <MenuItem value={"AK"}>AK</MenuItem>
                        <MenuItem value={"AR"}>AR</MenuItem>	
                        <MenuItem value={"AZ"}>AZ</MenuItem>
                        <MenuItem value={"CA"}>CA</MenuItem>
                        <MenuItem value={"CO"}>CO</MenuItem>
                        <MenuItem value={"CT"}>CT</MenuItem>
                        <MenuItem value={"DC"}>DC</MenuItem>
                        <MenuItem value={"DE"}>DE</MenuItem>
                        <MenuItem value={"FL"}>FL</MenuItem>
                        <MenuItem value={"GA"}>GA</MenuItem>
                        <MenuItem value={"HI"}>HI</MenuItem>
                        <MenuItem value={"IA"}>IA</MenuItem>	
                        <MenuItem value={"ID"}>ID</MenuItem>
                        <MenuItem value={"IL"}>IL</MenuItem>
                        <MenuItem value={"IN"}>IN</MenuItem>
                        <MenuItem value={"KS"}>KS</MenuItem>
                        <MenuItem value={"KY"}>KY</MenuItem>
                        <MenuItem value={"LA"}>LA</MenuItem>
                        <MenuItem value={"MA"}>MA</MenuItem>
                        <MenuItem value={"MD"}>MD</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"MI"}>MI</MenuItem>
                        <MenuItem value={"MN"}>MN</MenuItem>
                        <MenuItem value={"MO"}>MO</MenuItem>	
                        <MenuItem value={"MS"}>MS</MenuItem>
                        <MenuItem value={"MT"}>MT</MenuItem>
                        <MenuItem value={"NC"}>NC</MenuItem>	
                        <MenuItem value={"NE"}>NE</MenuItem>
                        <MenuItem value={"NH"}>NH</MenuItem>
                        <MenuItem value={"NJ"}>NJ</MenuItem>
                        <MenuItem value={"NM"}>NM</MenuItem>			
                        <MenuItem value={"NV"}>NV</MenuItem>
                        <MenuItem value={"NY"}>NY</MenuItem>
                        <MenuItem value={"ND"}>ND</MenuItem>
                        <MenuItem value={"OH"}>OH</MenuItem>
                        <MenuItem value={"OK"}>OK</MenuItem>
                        <MenuItem value={"OR"}>OR</MenuItem>
                        <MenuItem value={"PA"}>PA</MenuItem>
                        <MenuItem value={"RI"}>RI</MenuItem>
                        <MenuItem value={"SC"}>SC</MenuItem>
                        <MenuItem value={"SD"}>SD</MenuItem>
                        <MenuItem value={"TN"}>TN</MenuItem>
                        <MenuItem value={"TX"}>TX</MenuItem>
                        <MenuItem value={"UT"}>UT</MenuItem>
                        <MenuItem value={"VT"}>VT</MenuItem>
                        <MenuItem value={"VA"}>VA</MenuItem>
                        <MenuItem value={"WA"}>WA</MenuItem>
                        <MenuItem value={"WI"}>WI</MenuItem>	
                        <MenuItem value={"WV"}>WV</MenuItem>
                        <MenuItem value={"WY"}>WY</MenuItem>
                  </Select>
               </FormControl>

               <Input id="searchStr" className="searchStr" placeholder="Enter name (3+ chars)" label="Search" variant="outlined" 
                  value={this.props.filters.text} 
                  onChange={this.onTextChange}
               />

            </Paper>
         </Container>

      )
   }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters,   // will allow PersonListFilters access to Redux Store filters
      persons: state.persons
   }
}

const mapDispatchToProps = (dispatch) => ({    // implicitly returns object;  same as => { return {... } }
   setTextFilter: (text) => dispatch(setTextFilter(text)),   // dispatches action 'setTextFilter' w/ param of 'text' 
   sortByIdAsc: () => dispatch(sortByIdAsc()),
   sortByIdDesc: () => dispatch(sortByIdDesc()),
   sortByScoreAsc: () => dispatch(sortByScoreAsc()),
   sortByScoreDesc: () => dispatch(sortByScoreDesc()),
   sortByNameAsc: () => dispatch(sortByNameAsc()),
   sortByNameDesc: () => dispatch(sortByNameDesc()),
   sortByAgeAsc: () => dispatch(sortByAgeAsc()),
   sortByAgeDesc: () => dispatch(sortByAgeDesc()),
   sortByGenderAsc: () => dispatch(sortByGenderAsc()),
   sortByGenderDesc: () => dispatch(sortByGenderDesc()),
   sortByStateAsc: () => dispatch(sortByStateAsc()),
   sortByStateDesc: () => dispatch(sortByStateDesc()),
   sortByStatusAsc: () => dispatch(sortByStatusAsc()),
   sortByStatusDesc: () => dispatch(sortByStatusDesc()),
   setAge: (age) => dispatch(setAge(age)),
   setScore: (score) => dispatch(setScore(score)),
   setGender: (gender) => dispatch(setGender(gender)),
   setState: (stXX) => dispatch(setState(stXX))
 });

export default connect(mapStateToProps, mapDispatchToProps)(PersonListFilters); 