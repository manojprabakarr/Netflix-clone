
import React,{useState,useEffect} from 'react'
import axios from './axios'

import './banner.css'


function Banner({fetchUrl}) {
    const [movie,setmovie]=useState([])

    useEffect(()=> {
        async function fetchdata() {
            const request = await axios.get(fetchUrl)
            setmovie(
                request.data.results[
                  Math.floor(Math.random() * request.data.results.length - 1)
                ]
              );

        }
        fetchdata()

    },[fetchUrl])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

   

   
  
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
           backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner-contents">
            <h1 className="banner_title">
            {movie?.title || movie?.original_name || movie?.name}
         
        </h1>
                <div className="banner-buttons">
                    <button className="banner-button">play</button>
                    <button className="banner-button">My playList</button>

                </div>
                <h2 className="banner_desc">{truncate(movie?.overview, 150)}</h2>

            </div>
        </header>
      
            
       
    )
}

export default Banner
