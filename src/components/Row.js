import React,{useEffect,useState} from 'react'
import axios from './axios'
import './row.css'
import movieTrailer from "movie-trailer";
import Youtube from 'react-youtube'




const baseImgUrl ="https://image.tmdb.org/t/p/original"





function Row({title,fetchUrl,isLargeRow }) {
    const[movies,setmovies]=useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
  
    const options = {
      height: "390",
      width: "100%",
      
      playerVars: {
        autoplay: 1,
      },
    };
  
   
    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchUrl);
     setmovies(request.data.results)
     return request;
          
        }
        fetchData();

        
   
        
      }, [fetchUrl]);

      const handlecheck=(movie)=> {
        console.log(movie)
       if (trailerUrl) {
         setTrailerUrl("");
       } else {
         // Search for movie trailer full url
         movieTrailer(movie?.name || "")
           .then((Url) => {
           
            
             const urlParams = new URLSearchParams(new URL(Url).search); 
             setTrailerUrl(urlParams.get("v")); 
             
           })
           .catch((error) => console.log(error));
       }
      }


      
       

    
      
      
      
    return (
        <div className="row">
            <h1>{title}</h1>
        <div className="posters">
          {movies &&
          movies.map((movie)=> (
            <img 
            className={`poster ${isLargeRow && "posters_large"}`}
            onClick={() => handlecheck(movie)}
            key={movie.id}
            id={movie.id}
            src={`${baseImgUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={`${baseImgUrl}${movie.original_title}`}
             />
         

          ))}
      
           
           
           
            </div>
          
           {trailerUrl && <Youtube  videoId={trailerUrl} opts={options} />
}        </div>
    )
}

export default Row
