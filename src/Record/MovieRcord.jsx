import React,{useState, useEffect, createContext} from 'react'

// {popularity: 64.28, 
// vote_count: 14131, video: false, poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg", id: 299534, …}


export const ContextMovie=createContext()

// export const loadmore=createContext()


export const MovieContaxt=props=>{

  const [Moviedata,setMoviedata]=useState([])
  const [load,setload]=useState(1)
  



  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=81a5499013451ffd894029835478e7b1&language=en-US&sort_by=popularity.desc&page=${load}`)
  .then(response => response.json())
  .then(data =>{
    setMoviedata(predata=>[...predata.concat(data.results)])
  }
  );
},[load])


    
  return(
    <ContextMovie.Provider value={[[Moviedata,setMoviedata],[load,setload]]}>
      {props.children}    
    </ContextMovie.Provider>
  )
}