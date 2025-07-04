import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieDetailsProps } from "../../types/interfaces"; 
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  },
};


const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
const favourites = JSON.parse(localStorage.getItem("favourites") || '[]');
let checkingId = movie.id;
let filteredFavMovie = favourites.filter(m => m.id === checkingId);
console.log(filteredFavMovie[0]?.favourite);


  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
          {
                filteredFavMovie[0]?.favourite ? (
                  <Avatar sx={styles.root.avatar}>
                    <FavoriteIcon />
                  </Avatar>
                ) : null 
              }

      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
