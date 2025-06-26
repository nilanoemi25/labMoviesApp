import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getupcomingMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import UpcomingMoviesAddIcon from '../components/cardIcons/playlistAdd'


const UpcomingPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("upcoming", getupcomingMovies);
 

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
        title="Discover Movies"
      movies={movies}
        action={(movie: BaseMovieProps) => {
          return <UpcomingMoviesAddIcon {...movie} />
        }}
      />
    </>
  );
};

export default UpcomingPage;
