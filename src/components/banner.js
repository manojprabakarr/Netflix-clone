
import React from 'react'

import './banner.css'


function Banner({fetchUrl}) {

   

   
  
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
           // backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
            <div className="banner-contents">
            <h1 className="banner_title">
         
        </h1>
                <div className="banner-buttons">
                    <button className="banner-button">play</button>
                    <button className="banner-button">My playList</button>

                </div>
                <h2 className="banner_desc">truncate</h2>

            </div>
        </header>
      
            
       
    )
}

export default Banner
