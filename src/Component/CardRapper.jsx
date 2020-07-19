import React,{useContext, useEffect} from 'react';
import CardMovie from './CardMovie'
import {ContextMovie} from '../Record/MovieRcord'





const CardRapper=()=>{

   const [[result,setresult],[load,setload]]=useContext(ContextMovie)
    
    

    return (
        <div className="container" style={{paddingTop:10}}>
          <div className="row">
            {
              result.map((item)=>(
                  <CardMovie item={item} key={item.original_title}/>
                 ))
            }        
            </div>
            
            <button onClick={()=>setload(preload=>preload+1)} 
              style={{
                padding:5,
                width:"100%",
                fontSize:30,
                color:"white",
                backgroundColor:"#107a67",
                marginTop:10
              }}
            
            >Load more. <label style={{fontSize:20}}>{result.length} result loaded</label></button>
        </div>
    )

}



export default CardRapper