import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingPage from "./pages/upcomingMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AuthProvider from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/mostPopularMovies";
import CastPage from "./pages/castPage";
import CreateFantasyMoviePage from "./pages/fantasyMoviePage";
import ProtectedRoute from "./components/protectedRoute";
import LoginPage from "./pages/loginPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
      <SiteHeader /> 
      <MoviesContextProvider> 
        <Routes>
          <Route path="/reviews/:id" element={<MovieReviewPage/>} />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={
            <ProtectedRoute>
              <UpcomingPage />
          </ProtectedRoute> } /> 
          <Route path="/popular" element={<PopularMoviesPage />} />
          <Route path="/cast/:id" element={<CastPage/>} /> //Created Cast page with dynamic ID
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/createFantasy" element={<CreateFantasyMoviePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </MoviesContextProvider>   
      </AuthProvider>
    </BrowserRouter>
   <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

