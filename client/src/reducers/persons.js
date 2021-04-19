import { bindActionCreators } from "redux";

// ch 92 - Persons Reducer - action data here comes from addPerson action generator (e.g.);  
const personsReducerDefaultState33 = []; 
const personsReducerDefaultState = {plist: [], tot: 0}; 
const personsReducer = (state=personsReducerDefaultState, action) => {     // default of empty array
    console.log('AAA', action); 
    switch (action.type) {
        case 'RESET_PERSONS33':   // NEW -- needs API call
            return action.persons   
        case 'RESET_PERSONS':   // NEW -- needs API call
            console.log('action.persons = ' + action.persons); 
            console.log('action.tot = ' + action.tot); 
            return {
                ...state, 
                plist: action.persons, 
                tot: action.tot
            }     
        case 'SELECT_PERSON': 
            console.log('action.selectedPerson = ' + action.selectedPerson); 
            return {
                ...state, 
                selectedPerson: action.selectedPerson
            }           
        case 'ADD_PERSON':   // ch 93 -- Added 
             return [         
               ...state, 
               action.person 
            ]
        case 'REMOVE_PERSON':   // ch 93 -- Added to Expenses Reducer 
            return state.filter(({ id }) => id !== action.id )   // destructured to get just id from state & simplify
        case 'EDIT_PERSON': 
            return state.map((person) => {
                if (action.id === person.id) {
                    console.log('jv = ' + JSON.stringify(action.updates)); 
                    return {
                        ...person,   // all properties of existing person
                        ...action.updates   // e.g. {"score": 500};  effect is to add this as a new property
                    }; 
                } else return person;   // no change
            })
        default: 
            return state; 
    }
}

export default personsReducer; 