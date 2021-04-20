const personsReducerDefaultState = {plist: [], tot: 0}; 
const personsReducer = (state=personsReducerDefaultState, action) => {     
    switch (action.type) {
        case 'RESET_PERSONS':       // Triggers a refresh of Home page grid -- for API retrieve of persons
            return {
                ...state, 
                plist: action.persons, 
                tot: action.tot
            }     
        case 'SELECT_PERSON':       // Updates store with data for Modal -- for API retrieve of one person
            return {
                ...state, 
                selectedPerson: action.selectedPerson
            }           
        default: 
            return state; 
    }
}

export default personsReducer; 