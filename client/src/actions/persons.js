import uuid from 'uuid'; 

export const resetPersons = ( persons, tot ) => { 
   return ({
      type: 'RESET_PERSONS', 
      persons: persons, 
      tot: tot
   })
}

export const selectPerson = ( person ) => {
   return ({
      type: 'SELECT_PERSON', 
      selectedPerson: person 
   })
}
