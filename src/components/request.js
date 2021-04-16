const api_key="407d61462e89914a7a21a00aafa3e359";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
 
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,

};
  export default requests
