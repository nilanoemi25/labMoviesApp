import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import { getCredits} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { CastMember } from "../types/interfaces";
import CastDetails from "../components/castDetails";

const CastPage: React.FC= () => {
  const { id } = useParams();
 
  const { data: cast, error, isLoading, isError } = useQuery<CastMember, Error>(
    ["credit", id],
    ()=> getCredits(id||"")
  );



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {cast ? (
            <CastDetails {...cast} />
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default CastPage;
