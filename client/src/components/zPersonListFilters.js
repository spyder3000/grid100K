import React from 'react'; 
import { connect } from 'react-redux'; 
//import { DateRangePicker } from 'react-dates'; 
import { setTextFilter, sortByScoreDesc, sortByScoreAsc, sortByNameDesc, sortByNameAsc, sortByAgeDesc, 
         sortByAgeAsc, sortByIdDesc, sortByIdAsc, setAgeRange, setScoreRange, setStateAbbr, setGender, 
         setPageNum, setDisplayNum }  from '../actions/filters'; 
import { resetPersons }  from '../actions/persons';

// ch 110 - convert stateless component to one with class 
class PersonListFilters extends React.Component {
   state = {
      calendarFocused: null  // null or a String (indicating calendar 1 or 2) 
   }; 

   loadData () {
      let qparams = ''; 
      if (this.props.filters.sort && this.props.filters.pagenum && this.props.filters.displaynum) {
          let x = (parseInt(this.props.filters.pagenum) - 1).toString(); 
          qparams = '?sort=' + this.props.filters.sort + '&limit=' + this.props.filters.displaynum + ((x =='0') ? '' : '&skip=' + x);  
      }
      console.log('qparams = ' + qparams); 
      fetch('http://localhost:3001/api/personsFilter' + qparams, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         this.props.dispatch(resetPersons(result.persons));
      })
   }


/*   onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
   }; 
   onFocusChange = (calendarFocused) => {
      this.setState(() => ({ calendarFocused }));  // shorthand
   }; */
   render() {
      return (
         <div>  {/* default to current value stored for text (value in Search) */}
            <div className="row1">
               <input type='text' value={this.props.filters.text} onChange={(e) => {
                  this.props.dispatch(setTextFilter(e.target.value));   // will update store with modified value in Search box (as we're typing)
                  this.loadData();  
               // console.log(e.target.value); 
               }} /> 
               <select value={this.props.filters.displaynum} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setDisplayNum(e.target.value))
                     .then((result) => {
                        this.loadData();
                     })
                     // this.loadData();   
               }}>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
               </select>
               <select value={this.props.filters.pagenum} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setPageNum(e.target.value));  
               }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
               </select>
            </div>

            <div className="row2">

               <select value={this.props.filters.sort} onChange={(e) => {  // will update store with modified value in Select List
                     if (e.target.value === 'scoreasc') this.props.dispatch(sortByScoreAsc()); 
                     else if (e.target.value === 'scoredesc') this.props.dispatch(sortByScoreDesc());    
                     else if (e.target.value === 'nameasc') this.props.dispatch(sortByNameAsc()); 
                     else if (e.target.value === 'namedesc') this.props.dispatch(sortByNameDesc()); 
                     else if (e.target.value === 'ageasc') this.props.dispatch(sortByAgeAsc()); 
                     else if (e.target.value === 'agedesc') this.props.dispatch(sortByAgeDesc()); 
                     else if (e.target.value === 'idasc') this.props.dispatch(sortByIdAsc()); 
                     else if (e.target.value === 'iddesc') this.props.dispatch(sortByIdDesc());   
                  }}>
                  <option value="scoreasc">Score (Asc)</option>
                  <option value="scoredesc">Score (Desc)</option>
                  <option value="nameasc">Name (Asc)</option>
                  <option value="namedesc">Name (Desc)</option>
                  <option value="ageasc">Age (Asc)</option>
                  <option value="agedesc">Age (Desc)</option>
                  <option value="idasc">Entry Num (Asc)</option>
                  <option value="iddesc">Entry Num (Desc)</option>
               </select>

               <select value={this.props.filters.age} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setAgeRange(e.target.value));  
               }}>
                  <option value="0">None</option>
                  <option value="1">1-10</option>
                  <option value="2">11-20</option>
                  <option value="3">21-30</option>
                  <option value="4">31-40</option>
                  <option value="5">41-50</option>
                  <option value="6">51-60</option>
                  <option value="7">61-70</option>
                  <option value="8">71-80</option>
                  <option value="9">81-90</option>
                  <option value="10">91-100</option>
               </select>

               <select value={this.props.filters.score} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setScoreRange(e.target.value));  
               }}>
                  <option value="0">None</option>
                  <option value="10">455-500</option>
                  <option value="9">405-450</option>
                  <option value="8">355-400</option>
                  <option value="7">305-350</option>
                  <option value="6">255-300</option>
                  <option value="5">205-250</option>
                  <option value="4">155-200</option>
                  <option value="3">105-150</option>
                  <option value="2">55-100</option>
                  <option value="1">0-50</option>
               </select>

               <select value={this.props.filters.gender} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setGender(e.target.value));  
               }}>
                  <option value="X">All</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
               </select>

               <select value={this.props.filters.stateXX} onChange={(e) => {  // will update store with modified value in Select List
                     this.props.dispatch(setStateAbbr(e.target.value));  
               }}>
                  <option value="XX">None</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>	
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>	
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>	
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>	
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>			
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>	
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
               </select>
            </div>
      </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters   // will allow PersonListFilters access to Redux Store filters
   }
}

export default connect(mapStateToProps)(PersonListFilters); 