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
      text: '', 
      sort: 'idasc',
      age: 0, 
      score: 0, 
      stateXX: 'XX', 
      gender: 'X', 
      pagenum: 1, 
      displaynum: 20, 
      strButtonClick: false 
   }; 

   loadData (dat) {
      let qparams = ''; 
      console.log(dat); 
      if (dat.sort && dat.pagenum && dat.displaynum) {
          let x = (parseInt(dat.pagenum) - 1).toString(); 
          qparams = '?sort=' + dat.sort + '&limit=' + dat.displaynum + ((x =='0') ? '' : '&skip=' + x);  
      }
      if (dat.age && parseInt(dat.age) !== 0) qparams += '&age=' + dat.age.toString(); 
      if (dat.score && parseInt(dat.score) !== 0) qparams += '&score=' + dat.score.toString(); 
      if (dat.gender && dat.gender !== 'X') qparams += '&gender=' + dat.gender; 
      if (dat.stateXX && dat.stateXX !== 'XX') qparams += '&stateXX=' + dat.stateXX; 
      if (dat.strButtonClick) qparams += '&str=' + dat.text; 

      console.log('qparams = ' + qparams); 
      fetch('http://localhost:3001/api/personsFilter' + qparams, {
         headers : { 
           'Content-Type': 'application/json',
           'Accept': 'application/json'
      }})
      .then(res => res.json())
      .then((result) => {
         // this.props.dispatch(resetPersons(result.persons));
         this.props.dispatch(resetPersons(result.persons, result.tot));
      })
   }
   // loadData88 () {
   //    let qparams = ''; 
   //    if (this.state.sort && this.state.pagenum && this.state.displaynum) {
   //        let x = (parseInt(this.state.pagenum) - 1).toString(); 
   //        qparams = '?sort=' + this.state.sort + '&limit=' + this.state.displaynum + ((x =='0') ? '' : '&skip=' + x);  
   //    }
   //    console.log('qparams = ' + qparams); 
   //    fetch('http://localhost:3001/api/personsFilter' + qparams, {
   //       headers : { 
   //         'Content-Type': 'application/json',
   //         'Accept': 'application/json'
   //    }})
   //    .then(res => res.json())
   //    .then((result) => {
   //       this.props.dispatch(resetPersons(result.persons));
   //    })
   // }

/*   onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
   }; 
   onFocusChange = (calendarFocused) => {
      this.setState(() => ({ calendarFocused }));  // shorthand
   }; */
   render() {
      return (
         <div className="container_grid">  {/* default to current value stored for text (value in Search) */}
            <div className="row1">
               <label className="row_label">Search Name</label>
               <input id="searchStr" type='text' value={this.state.text} ref={ n => {this.myRef = n }} onChange={(e) => {
                  this.setState({ text: e.target.value}); 
                  // this.props.dispatch(setTextFilter(e.target.value));   // will update store with modified value in Search box (as we're typing)
                  // this.loadData();  
               // console.log(e.target.value); 
               }} /> 
               <button className="button" onClick={(e) => {  // will update store with modified value in Select List
 //                 let str = query.selector('#searchStr'); 
                  console.log(this.myRef);  
                  this.setState({ text: ''});   // reset Search box back to spaces
                  this.loadData({...this.state, text: this.myRef.value, strButtonClick: true}); 
                     // this.setState({ pagenum: newPage})
                     // this.loadData({...this.state, pagenum: newPage});  
               }}>OK 
               </button>

               <label className="row_label">Per Page</label><select value={this.state.displaynum} onChange={(e) => {  // will update store with modified value in Select List
                  console.log('e.target = ' + e.target.value); 
                     this.setState({ displaynum: e.target.value})
                     // await this.testOne(e.target.value)
                     // .then(res => this.loadData());
                     this.loadData({...this.state, displaynum: e.target.value}); 
                     //this.loadData();
                     // this.loadData();   
               }}>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
               </select>

               <label className="row_label">Page Num</label>
               <button className="button" onClick={(e) => {  // will update store with modified value in Select List
                  let newPage = parseInt(this.state.pagenum) - 1; 
                     this.setState({ pagenum: newPage})
                     this.loadData({...this.state, pagenum: newPage});  
               }}>&lt; 
               </button>
               <button className="button" onClick={(e) => {  // will update store with modified value in Select List
                  let newPage = parseInt(this.state.pagenum) + 1; 
                     this.setState({ pagenum: newPage})
                     this.loadData({...this.state, pagenum: newPage});  
               }}>&gt; 
               </button>
               <select value={this.state.pagenum} onChange={(e) => {  // will update store with modified value in Select List
                     this.setState({ pagenum: e.target.value})
                     this.loadData({...this.state, pagenum: e.target.value});  
               }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
               </select>
               <button className="button" onClick={(e) => {  // will update store with modified value in Select List
                  let newPage = parseInt(e.target.value); 
                     this.setState({ pagenum: newPage})
                     this.loadData({...this.state, pagenum: newPage});  
               }}>OK 
               </button>Curr Page = {this.props.persons.tot}
            </div>

            <div className="row2">
               <label className="row_label">Sort:</label>
               <select value={this.state.sort} onChange={(e) => {  // will update store with modified value in Select List
                     // if (e.target.value === 'scoreasc') this.props.dispatch(sortByScoreAsc()); 
                     // else if (e.target.value === 'scoredesc') this.props.dispatch(sortByScoreDesc());    
                     // else if (e.target.value === 'nameasc') this.props.dispatch(sortByNameAsc()); 
                     // else if (e.target.value === 'namedesc') this.props.dispatch(sortByNameDesc()); 
                     // else if (e.target.value === 'ageasc') this.props.dispatch(sortByAgeAsc()); 
                     // else if (e.target.value === 'agedesc') this.props.dispatch(sortByAgeDesc()); 
                     // else if (e.target.value === 'idasc') this.props.dispatch(sortByIdAsc()); 
                     // else if (e.target.value === 'iddesc') this.props.dispatch(sortByIdDesc());   
                     this.setState({ sort: e.target.value})
                     this.loadData({...this.state, sort: e.target.value}); 
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

               <label className="row_label">Ages:</label>
               <select value={this.state.age} onChange={(e) => {  // will update store with modified value in Select List
                     // this.props.dispatch(setAgeRange(e.target.value));  
                     this.setState({ age: e.target.value})
                     this.loadData({...this.state, age: e.target.value});  
               }}>
                  <option value="0">All</option>
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

               <label className="row_label">Scores:</label>
               <select value={this.state.score} onChange={(e) => {  // will update store with modified value in Select List
                     // this.props.dispatch(setScoreRange(e.target.value));  
                     this.setState({ score: e.target.value})
                     this.loadData({...this.state, score: e.target.value});  
               }}>
                  <option value="0">All</option>
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

               <label className="row_label">Gender:</label>
               <select value={this.state.gender} onChange={(e) => {  // will update store with modified value in Select List
                     // this.props.dispatch(setGender(e.target.value));  
                     this.setState({ gender: e.target.value})
                     this.loadData({...this.state, gender: e.target.value});  
               }}>
                  <option value="X">All</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
               </select>

               <label className="row_label">State:</label>
               <select value={this.state.stateXX} onChange={(e) => {  // will update store with modified value in Select List
                     // this.props.dispatch(setStateAbbr(e.target.value));  
                     this.setState({ stateXX: e.target.value})
                     this.loadData({...this.state, stateXX: e.target.value});  
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
      filters: state.filters,   // will allow PersonListFilters access to Redux Store filters
      persons: state.persons
   }
}

export default connect(mapStateToProps)(PersonListFilters); 