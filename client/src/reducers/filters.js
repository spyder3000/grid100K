import moment from 'moment'; 

// ch 92 - Filters Reducer
const filtersReducerDefaultState = {    // default values for filter properties  
   text: '', 
   sort: 'idasc',
   age: 0, 
   score: 0, 
   stateXX: 'XX', 
   gender: 'x', 
   pagenum: 1, 
   displaynum: 20
}
const filtersReducer = (state=filtersReducerDefaultState, action) => {
   switch (action.type) {
       case 'SET_TEXT_FILTER': 
           // return state.concat(action.text);  // note cannot use state.push as this changes array;  return .concat creates new array
           return {        // same as above but uses spread operator
           ...state,           // all properties from current object
           text: action.text   // add/update text property of this object
           };
        case 'SORT_BY_SCORE_DESC': 
           return {
               ...state, 
               sort: 'scoredesc'
           }
        case 'SORT_BY_SCORE_ASC': 
           return {
               ...state, 
               sort: 'scoreasc'
           }
       case 'SORT_BY_NAME_DESC': 
           return {
               ...state, 
               sort: 'namedesc'
           }   
        case 'SORT_BY_NAME_ASC': 
           return {
               ...state, 
               sort: 'nameasc'
           }     
        case 'SORT_BY_AGE_DESC': 
           return {
               ...state, 
               sort: 'namedesc'
           }  
        case 'SORT_BY_AGE_ASC': 
           return {
               ...state, 
               sort: 'nameasc'
           }  
        case 'SORT_BY_ID_DESC': 
           return {
               ...state, 
               sort: 'iddesc'
           }  
        case 'SORT_BY_ID_ASC': 
           return {
               ...state, 
               sort: 'idasc'
           }    
        case 'SET_AGE_RANGE': 
            return {
                ...state, 
                age: action.age
            } 
        case 'SET_SCORE_RANGE': 
            return {
                ...state, 
                score: action.score
            } 
       case 'SET_STATE_ABBR': 
           return {
               ...state, 
               stateXX: action.stateXX
           }    
       case 'SET_GENDER': 
           return {
               ...state, 
               gender: action.gender
           }     
        case 'SET_PAGE_NUM': 
           return {
               ...state, 
               pagenum: action.pagenum
           }   
        case 'SET_DISPLAY_NUM': 
           return {
               ...state, 
               displaynum: action.displaynum
           }                 
       default: 
           return state; 
   }
}
export default filtersReducer; 