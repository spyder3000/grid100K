
// const API_URL = 'http://localhost:3001/api/personsFilter';
// const headers = { 'Content-Type': 'application/json' };

const getData = (dat) => {
   console.log('getData BEGIN'); 
   console.log(dat); 
   let qparams = ''; 
   if (dat.sort && dat.pagenum && dat.displaynum) {
         let x = (parseInt(dat.pagenum) + 1).toString(); 
         qparams = '?sort=' + dat.sort + '&limit=' + dat.displaynum + '&skip=' + x;  
         console.log(qparams); 
   }
//      axios.get(`${API_URL}/hotels`, { headers });
   fetch('http://localhost:3001/api/personsFilter' + qparams, {
      headers : { 
         'Content-Type': 'application/json',
         'Accept': 'application/json'
   }})
      .then(res => res.json())
      .then((result) => {
         console.log('got here'); 
         console.log(result.persons); 
         return result; 
//         this.setState({persons: result.persons, total: result.tot}) 
      })
}
       
export { getData };
