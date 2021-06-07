// combineReducers allow us to create multiple functions to define how our redux application changes;  
import { createStore, combineReducers } from 'redux';  
import personsReducer from '../reducers/persons'; 
import filtersReducer from '../reducers/filters'; 

export default() => {
   const store = createStore(
      combineReducers({
         persons: personsReducer,   // sets up persons to be managed by personsReducer; 
         filters: filtersReducer 
      }), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // to enable 'Redux' tab of Chrome
   )
   return store; 
}


