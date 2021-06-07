const getRangeScore = (val) => { 
   if (isNaN(val) ||  val < 1 || val > 10) return; 
   if (val == 1) return { $gte: 0, $lte: 50 }; 
   let lowNum = (val - 1) * 50 + 5; 
   let highNum = val * 50; 
   return { $gte: lowNum, $lte: highNum }; 
}

const getRangeAge = (val) => { 
   if (isNaN(val) ||  val < 1 || val > 10) return; 
   if (val == 1) return { $gte: 0, $lte: 10 }; 
   let lowNum = (val - 1) * 10 + 1; 
   let highNum = val * 10; 
   return { $gte: lowNum, $lte: highNum }; 
}

// Filter & Sort Persons array before returning 
export default (persons, {text, sortBy, age, score, gender, stateXX, pagenum, rowsperpage }) => {  // 1st param is array of persons
   // console.log('Selectors!!!!'); 
   // console.log(persons[0]); 
   // console.log(`${text} - ${sortBy} - ${age} - ${score} - ${gender} - ${stateXX} `); 
   return persons.filter((person) => {   // will return filtered & sorted array (due to .filter() & .sort() below)
      const ageRange = getRangeAge(age);     
      const scoreRange = getRangeScore(score);  
      const ageMatch = (age > 0) ?  (person.age >= ageRange.$gte && person.age <= ageRange.$lte) : true;   
      const scoreMatch = (score > 0) ?  (person.score >= scoreRange.$gte && person.score <= scoreRange.$lte) : true; 
      const genderMatch = (gender !== 'X') ? (person.gender == gender) : true; 
      const stateMatch = (stateXX !== 'XX') ? (person.state == stateXX) : true; 
      const textMatch =  ( person.first_name.toLowerCase().includes(text.toLowerCase()) || 
            person.last_name.toLowerCase().includes(text.toLowerCase()) );  // .includes checks for match in string 
      return ageMatch && scoreMatch && genderMatch && stateMatch && textMatch;  
   }).sort((a, b) => {
         if (sortBy === 'idasc') {        // put smallest id first;  1 means switch order of a & b;  -1 means keep order same 
            return a.id > b.id ? 1 : -1 
         }
         else if (sortBy === 'iddesc') {    // put largest id first;  1 means switch order of a & b;  -1 means keep order same 
            return a.id < b.id ? 1 : -1 
         }
         else if (sortBy === 'ageasc') {     
            return a.age > b.age ? 1 : -1 
         }
         else if (sortBy === 'agedesc') {     
            return a.age < b.age ? 1 : -1 
         }
         else if (sortBy === 'scoreasc') {     
            return a.score > b.score ? 1 : -1 
         }
         else if (sortBy === 'scoredesc') {     
            return a.score < b.score ? 1 : -1 
         }
         else if (sortBy === 'nameasc') {     
            return a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1 
         }
         else if (sortBy === 'namedesc') {     
            return a.last_name.toLowerCase() < b.last_name.toLowerCase() ? 1 : -1 
         }
         else if (sortBy === 'genderasc') {     
            return a.gender > b.gender ? 1 : -1 
         }
         else if (sortBy === 'genderdesc') {     
            return a.gender < b.gender ? 1 : -1 
         }
         else if (sortBy === 'stateasc') {     
            return a.state > b.state ? 1 : -1 
         }
         else if (sortBy === 'statedesc') {     
            return a.state < b.state ? 1 : -1 
         }
         else if (sortBy === 'statusasc') {     
            return a.professional > b.professional ? 1 : -1 
         }
         else if (sortBy === 'statusdesc') {     
            // console.log(a.status + ' === ' + b.status)
            return a.professional < b.professional ? 1 : -1 
         }
      })
      //    .slice(20,40)
      //.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
}; 
