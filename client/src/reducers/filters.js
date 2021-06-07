const filtersReducerDefaultState = { 
   text: '', 
   sortBy: 'idasc',
   sortDir: 'asc', 
   sortField: 'id', 
   age: 0, 
   score: 0, 
   stateXX: 'XX', 
   gender: 'X', 
   pagenum: 1, 
   displaynum: 20, 
   strButtonClick: false, 
   pagenum: 0, 
   rowsperpage: 20 
}

const filtersReducer = (state=filtersReducerDefaultState, action) => {
   // console.log('filters (REducer) action.type = ' + action.type); 
   // console.log('action.stateXX = ' + action.stateXX); 
   // console.log(state); 
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            // return state.concat(action.expense);  // note cannot use state.push as this changes array;  return .concat creates new array
            return {        // same as above but uses spread operator
            ...state,           // current object
            text: action.text   // add/update text property of this object
            };
        case 'SORT_BY_ID_ASC': 
            return {
                ...state, 
                sortBy: 'idasc', 
                sortDir: 'asc', 
                sortField: 'id'
            }
         case 'SORT_BY_ID_DESC': 
            return {
                ...state, 
                sortBy: 'iddesc', 
                sortDir: 'desc', 
                sortField: 'id'
         }  
         case 'SORT_BY_SCORE_ASC': 
            return {
               ...state, 
               sortBy: 'scoreasc', 
               sortDir: 'asc', 
               sortField: 'score'
            }
         case 'SORT_BY_SCORE_DESC': 
            return {
               ...state, 
               sortBy: 'scoredesc', 
               sortDir: 'desc', 
               sortField: 'score'
         }  
         case 'SORT_BY_NAME_ASC': 
            return {
               ...state, 
               sortBy: 'nameasc', 
               sortDir: 'asc', 
               sortField: 'name'
            }
         case 'SORT_BY_NAME_DESC': 
            return {
               ...state, 
               sortBy: 'namedesc', 
               sortDir: 'desc', 
               sortField: 'name'
         }  
         case 'SORT_BY_AGE_ASC': 
            return {
               ...state, 
               sortBy: 'ageasc', 
               sortDir: 'asc', 
               sortField: 'age'
            }
         case 'SORT_BY_AGE_DESC': 
            return {
               ...state, 
               sortBy: 'agedesc', 
               sortDir: 'desc', 
               sortField: 'age'
         }  
         case 'SORT_BY_GENDER_ASC': 
            return {
               ...state, 
               sortBy: 'genderasc', 
               sortDir: 'asc', 
               sortField: 'gender'
            }
         case 'SORT_BY_GENDER_DESC': 
            return {
               ...state, 
               sortBy: 'genderdesc', 
               sortDir: 'desc', 
               sortField: 'gender'
            }  
         case 'SORT_BY_STATE_ASC': 
            return {
               ...state, 
               sortBy: 'stateasc', 
               sortDir: 'asc', 
               sortField: 'state'
            }
         case 'SORT_BY_STATE_DESC': 
            return {
               ...state, 
               sortBy: 'statedesc', 
               sortDir: 'desc', 
               sortField: 'state'
            }  
         case 'SORT_BY_STATUS_ASC': 
            console.log('SORT_BY_STATUS_ASC found'); 
            return {
               ...state, 
               sortBy: 'statusasc', 
               sortDir: 'asc', 
               sortField: 'status'
            }
         case 'SORT_BY_STATUS_DESC': 
            return {
               ...state, 
               sortBy: 'statusdesc', 
               sortDir: 'desc', 
               sortField: 'status'
         }     
         case 'SET_AGE': 
            return {
                ...state, 
                age: action.age, 
                pagenum: 0
            }    

         case 'SET_SCORE': 
            return {
                ...state, 
                score: action.score
            }   

         case 'SET_GENDER': 
            return {
                  ...state, 
                  gender: action.gender
            }  
         case 'SET_STATE': 
            return {
                  ...state, 
                  stateXX: action.stateXX
            }     
         case 'SET_PAGENUM': 
            return {
                  ...state, 
                  pagenum: action.pagenum
            }    
         case 'SET_ROWS_PER_PAGE': 
            return {
                  ...state, 
                  rowsperpage: action.rowsperpage, 
                  pagenum: 0
            }                  
        default: 
            return state; 
    }
}

export default filtersReducer;  