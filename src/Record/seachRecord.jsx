import React,{useState, useEffect, createContext,useContext} from 'react'
import {ContextMovie} from './MovieRcord'

export const ContextSearch=createContext()

export const SearchContaxt=props=>{
    


    const[[Moviedata,setMoviedata],[]]=useContext(ContextMovie)
    
    const[name,setname]=useState("")

     

  useEffect(()=>{
      if(name.value!== undefined){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=81a5499013451ffd894029835478e7b1&language=en-US&query=${name.value}`)
  .then(response => response.json())
  .then(data =>{
      if(name.value!==""){
    setMoviedata(data.results)
      }
  }
  );
}
},[name.value])


    
return(
    <ContextSearch.Provider value={[name,setname]}>
      {props.children}    
    </ContextSearch.Provider>
  )
}