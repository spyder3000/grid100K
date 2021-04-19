import React from 'react'; 
import {useEffect, useState} from 'react'

export const Hello = ()=> {
//   return(<div>Hello [from Client] </div>)
   const [initialState, setInitialState] = useState([])

   useEffect(() => {
      fetch('/api/').then(res => {
         if (res.ok) {
            console.log ('All is OK')
            // console.log(res); 
            // console.log (res.json())    // returns the body as promise with json content 
            // console.log ('All is OK2')
            return res.json() 
         }
      }).then(jsonResponse =>   console.log(jsonResponse))  // console.log(jsonResponse))  // setInitialState(jsonResponse.hello))    // console.log(jsonResponse))
   }, [])

   console.log('aa = ' + initialState); 
   console.log('bb length = ' + initialState.length);  
   return(<div>
      {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
   </div>)
}