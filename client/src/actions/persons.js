import uuid from 'uuid'; 

export const resetPersons = ( persons, tot ) => { 
   // console.log('Actions = ' + persons.length); 
   // console.log('tot = ' + tot);
   console.log('actions - resetPersons'); 
   return ({
      type: 'RESET_PERSONS', 
      persons: persons, 
      tot: tot
   })
}

export const resetPersons33 = ( persons) => { 
   console.log('Actions = ' + persons.length); 
   return ({
      type: 'RESET_PERSONS', 
      persons
   })
}

export const selectPerson = ( person ) => {
   return ({
      type: 'SELECT_PERSON', 
      selectedPerson: person 
   })
}

// ch 93 - ADD_EXPENSE Action generator;  implicitly return action object via ();  all but id comes from user
export const addPerson = ( {description='', note='', amount=0, createdAt = 0} = {} ) => ({    // destructuring the args; default vals; {} if no object
   type: 'ADD_PERSON', 
   person:  {
       id: uuid(), 
       description, 
       note, 
       amount, 
       createdAt
   }
});
// ch 93 -- REMOVE_EXPENSE Action generator 
export const removePerson = ( {id}) => ({
   type: 'REMOVE_PERSON', 
   id
})
// ch 94 -- EDIT_EXPENSE Action generator 
export const editPerson = (id, updates) => ({
   type: 'EDIT_PERSON', 
   id,
   updates
})