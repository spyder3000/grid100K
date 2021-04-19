// combineReducers allow us to create multiple functions to define how our redux application changes;  
import { createStore, combineReducers } from 'redux';  
import personsReducer from '../reducers/persons'; 
import filtersReducer from '../reducers/filters'; 

// ch 99 - export as a fn the store that is created
export default() => {
   // ch 92 -- Create Store 
   const store = createStore(
      combineReducers({
         persons: personsReducer,   // sets up persons to be managed by personsReducer;  instead of on root, puts array on persons property
         filters: filtersReducer 
      }), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // to enable 'Redux' tab of Chrome
   )
   return store; 
}


