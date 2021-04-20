import React from 'react'; 
import { connect } from 'react-redux'; 
import { resetPersons }  from '../actions/persons';

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
      if (dat.sort && dat.pagenum && dat.displaynum) {
          let x = (parseInt(dat.pagenum) - 1).toString(); 
          qparams = '?sort=' + dat.sort + '&limit=' + dat.displaynum + ((x =='0') ? '' : '&skip=' + x);  
      }
      if (dat.age && parseInt(dat.age) !== 0) qparams += '&age=' + dat.age.toString(); 
      if (dat.score && parseInt(dat.score) !== 0) qparams += '&score=' + dat.score.toString(); 
      if (dat.gender && dat.gender !== 'X') qparams += '&gender=' + dat.gender; 
      if (dat.stateXX && dat.stateXX !== 'XX') qparams += '&stateXX=' + dat.stateXX; 
      if (dat.strButtonClick) qparams += '&str=' + dat.text; 

      // console.log('qparams = ' + qparams); 
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
   
   render() {
      // calculate the Last page for page range
      let lastPage = parseInt((this.props.persons.tot - 1) / this.state.displaynum) + 1; 
      return (
         <div className="container_grid">  {/* default to current value stored for text (value in Search) */}
            <div className="row1">
               <div className="row1a">
                  <input id="searchStr" className="searchStr" placeholder="Enter name (3+ chars)" type='text' value={this.state.text} ref={ n => {this.myRef = n }} onChange={(e) => {
                     this.setState({ text: e.target.value}); 
                  }} /> 
                  <button disabled={this.state.text.length < 3 && this.state.text.length >= 1} className="button_ok" onClick={(e) => {  
                     this.setState({ text: '', pagenum: 1, age: 0, score: 0, stateXX: 'XX', gender: 'X' });   // reset Search box back to spaces & other selects to defaults
                     this.loadData({...this.state, text: this.myRef.value, strButtonClick: true, pagenum: 1});  // refresh Home page grid
                  }}>Search 
                  </button>
               </div>

               <div className="row1b">
                  <div className="row1b_item1">
                     <button className={`button_dir ${this.state.pagenum > 1 ? "" : "hideme"}  `} onClick={(e) => {  
                        let newPage = parseInt(this.state.pagenum) - 1; 
                           this.setState({ pagenum: newPage})                 // modify current page (to Prev Page)
                           this.loadData({...this.state, pagenum: newPage});  // refresh Home page grid
                        }}>
                        &lt; 
                     </button>
                     <span className="row_label">Page: {this.state.pagenum} <span className="tot_pages">/{lastPage}</span></span>
                     <button className={`button_dir ${this.state.pagenum < lastPage ? "" : "hideme"}  `} onClick={(e) => {  
                        let newPage = parseInt(this.state.pagenum) + 1; 
                           this.setState({ pagenum: newPage})                 // modify current page num (to Next Page)
                           this.loadData({...this.state, pagenum: newPage});  // refresh Home page grid
                        }}>
                        &gt; 
                     </button>
                  </div>
                  
                  <div className="row1b_item2">
                     <label className="row_label">Per Page</label>
                     <select value={this.state.displaynum} onChange={(e) => {  
                           this.setState({ displaynum: e.target.value, pagenum: 1})    // modify the number of recs shows on page;  reset to page 1
                           this.loadData({...this.state, displaynum: e.target.value, pagenum: 1});   // refresh Home page grid
                     }}>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                     </select>
                  </div>
               </div>
            </div>

            <div className="row2">
               <div className="row2a">
                  <div className="filter_sort_div">
                     <label className="row_label">Sort:</label>
                     <select value={this.state.sort} onChange={(e) => {  
                           this.setState({ sort: e.target.value})          // modify Sort order for the page
                           this.loadData({...this.state, sort: e.target.value});    // refresh Home page grid
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
                  </div>

                  <div className="filter_age_div">
                     <label className="row_label">Ages:</label>
                     <select value={this.state.age} onChange={(e) => {        
                           this.setState({ age: e.target.value, pagenum: 1})        // modify Age Filter
                           this.loadData({...this.state, age: e.target.value, pagenum: 1});     // refresh Home page grid
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
                  </div>
             
               </div>

               <div className="row2b">
                  <div className="filter_score_div">
                     <label className="row_label">Scores:</label>
                     <select value={this.state.score} onChange={(e) => {   
                           this.setState({ score: e.target.value, pagenum: 1})      // modify Score Range Filter
                           this.loadData({...this.state, score: e.target.value, pagenum: 1});   // refresh Home page grid
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
                  </div>

                  <div className="filter_gender_div">
                     <label className="row_label">Gender:</label>
                     <select value={this.state.gender} onChange={(e) => {    
                           this.setState({ gender: e.target.value, pagenum: 1})     // modify Gender Filter
                           this.loadData({...this.state, gender: e.target.value, pagenum: 1});  // refresh Home page grid
                     }}>
                        <option value="X">All</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                     </select>
                  </div>

                  <div className="filter_state_div">
                     <label className="row_label">State:</label>
                     <select value={this.state.stateXX} onChange={(e) => {    
                           this.setState({ stateXX: e.target.value, pagenum: 1})    // modify State Filter
                           this.loadData({...this.state, stateXX: e.target.value, pagenum: 1});  // refresh Home page grid
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