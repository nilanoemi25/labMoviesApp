import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMostPopularMovies } from "../api/tmdb-api";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import DisplayCastIcon from "../components/cardIcons/displayCast";


const PopularMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("popular", getMostPopularMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const movies = data ? data.results : [];


  return (
    <>
      <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie: BaseMovieProps) => {
          return      <DisplayCastIcon {...movie} /> // Replace this with a details page 
        }}
      />
    </>
  );
};

export default PopularMoviesPage; 
