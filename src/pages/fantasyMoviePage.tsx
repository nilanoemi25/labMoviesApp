import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { FantasyMovie } from "../types/interfaces";
import FantasyForm from "../components/fantasyMovieForm";

const CreateFantasyMoviePage: React.FC = () => {
   //const location = useLocation() // to do with routing 
   // const { movieId } = location.state; // to do with routing 

    return (

     <FantasyForm title={""} overview={""} genres={""} release_date={""} runtime={0} production_company={0} /> 

    );
};

export default CreateFantasyMoviePage;
