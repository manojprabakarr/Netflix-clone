import React from 'react'
import './App.css'
import Nav from './components/navbar'
import Row from './components/Row'
import Banner from  './components/banner'
import requests from './components/request'

function App() {
  return (
    <div className="App">
        <Nav  />
        <Banner  />
        <Row title="Toprated" fetchUrl={requests.fetchTopRated}
          isLargeRow={true}/>
        <Row title="Trending" fetchUrl={requests.fetchTrending}/>
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
        
      
    </div>
  );
}

export default App;
