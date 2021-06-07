// action generators for Filters

// SET_TEXT_FILTER action generator
export const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER', 
   text
})

// SORT_BY action generators
export const sortByIdAsc = () => ({
   type: 'SORT_BY_ID_ASC'
})

export const sortByIdDesc = () => ({
   type: 'SORT_BY_ID_DESC'
})

export const sortByScoreAsc = () => ({
   type: 'SORT_BY_SCORE_ASC'
})

export const sortByScoreDesc = () => ({
   type: 'SORT_BY_SCORE_DESC'
})

export const sortByNameAsc = () => ({
   type: 'SORT_BY_NAME_ASC'
})

export const sortByNameDesc = () => ({
   type: 'SORT_BY_NAME_DESC'
})

export const sortByAgeAsc = () => ({
   type: 'SORT_BY_AGE_ASC'
})

export const sortByAgeDesc = () => ({
   type: 'SORT_BY_AGE_DESC'
})

export const sortByGenderAsc = () => ({
   type: 'SORT_BY_GENDER_ASC'
})

export const sortByGenderDesc = () => ({
   type: 'SORT_BY_GENDER_DESC'
})

export const sortByStateAsc = () => ({
   type: 'SORT_BY_STATE_ASC'
})

export const sortByStateDesc = () => ({
   type: 'SORT_BY_STATE_DESC'
})

export const sortByStatusAsc = () => ({
   type: 'SORT_BY_STATUS_ASC'
})

export const sortByStatusDesc = () => ({
   type: 'SORT_BY_STATUS_DESC'
})

// SET action generators  [Select List mods]
export const setAge = (age=0) => ({
   type: 'SET_AGE',
   age
})

export const setScore = (score=0) => ({
   type: 'SET_SCORE',
   score
})

export const setGender = (gender='X') => ({
   type: 'SET_GENDER',
   gender
})

export const setPageNum = (pagenum=0) => ({
   type: 'SET_PAGENUM',
   pagenum
})

export const setRowsPerPage = (rowsperpage=20) => ({
   type: 'SET_ROWS_PER_PAGE',
   rowsperpage
})

export const setState = (stateXX='XX') => {
   console.log('stateXX = ' + stateXX); 
   return ( {
      type: 'SET_STATE',
      stateXX
   }); 
}

