// ch 94 -- SET_TEXT_FILTER Action Generator 
export const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER', 
   text
})

// SORT_BY Action Generators 
export const sortByScoreDesc = () => ({
   type: 'SORT_BY_SCORE_DESC'
})
export const sortByScoreAsc = () => ({
   type: 'SORT_BY_SCORE_ASC'
})
export const sortByNameDesc = () => ({
   type: 'SORT_BY_NAME_DESC'
})
export const sortByNameAsc = () => ({
   type: 'SORT_BY_NAME_ASC'
})
export const sortByAgeDesc = () => ({
   type: 'SORT_BY_AGE_DESC'
})
export const sortByAgeAsc = () => ({
   type: 'SORT_BY_AGE_ASC'
})
export const sortByIdDesc = () => ({
   type: 'SORT_BY_ID_DESC'
})
export const sortByIdAsc = () => ({
   type: 'SORT_BY_ID_ASC'
})

// Select List Mods -- Action generators
export const setAgeRange = (age) => ({
   type: 'SET_AGE_RANGE', 
   age
})
export const setScoreRange = (score) => ({
   type: 'SET_SCORE_RANGE', 
   score
})
export const setStateAbbr = (stateXX) => ({
   type: 'SET_STATE_ABBR', 
   stateXX
})
export const setGender = (gender) => ({
   type: 'SET_GENDER', 
   gender
})
// export const setPageNum = (pagenum) => ({
//    type: 'SET_PAGE_NUM', 
//    pagenum
// })
export const setPageNum = ( pagenum) => { 
   console.log('New Page num = ' + pagenum); 
   return ({
      type: 'SET_PAGE_NUM', 
      pagenum
   })
}
export const setDisplayNum = (displaynum) => ({
   type: 'SET_DISPLAY_NUM', 
   displaynum
})
