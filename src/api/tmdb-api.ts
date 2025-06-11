export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=cf899fb1da2f1175a57f4bf7d19f2929&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = ( id : string) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cf899fb1da2f1175a57f4bf7d19f2929`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cf899fb1da2f1175a57f4bf7d19f2929" +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  
   export const getMovieImages = ( id : string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=cf899fb1da2f1175a57f4bf7d19f2929`
    )
      .then((res) => res.json())
      .then((json) => json.posters);
  };
