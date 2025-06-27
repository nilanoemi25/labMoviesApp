import React from "react";
import {BaseMovieProps} from "../../types/interfaces"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const DisplayCastIcon:React.FC<BaseMovieProps> = (movie) => {
  return (
      <Link to={`/cast/${movie.id}`} > 
          <Button variant="outlined" size="medium" color="primary">
            See Cast
          </Button>
          
    </Link>
  );
};

export default  DisplayCastIcon; 