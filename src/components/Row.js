import React,{useEffect,useState} from 'react'
import axios from './axios'
import './row.css'




const baseImgUrl ="https://image.tmdb.org/t/p/original"



function Row({title,fetchUrl,isLargeRow }) {
    const[movies,setmovies]=useState([]);
  
  
   
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
     setmovies(request.data.results)
     return request;
          
        }
        fetchData();
      }, [fetchUrl]);



      
      
       

    
      
      
      
    return (
        <div className="row">
            <h1>{title}</h1>
        <div className="posters">
          {movies &&
          movies.map((movie)=> (
            <img className="poster"
             key={movie.id} 
        
             
            
             src={`${baseImgUrl}${
             movie.poster_path 
            }`}
            alt={movie.name} />
         

          ))}
      
           
           
           
            </div>
          
         
        </div>
    )
}

export default Row
