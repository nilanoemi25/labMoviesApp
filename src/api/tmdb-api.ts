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
 export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cf899fb1da2f1175a57f4bf7d19f2929`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
  export const getupcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=cf899fb1da2f1175a57f4bf7d19f2929&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };