import React, { useContext, useState, ChangeEvent, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import production_companies from "./production_companies";
import { FantasyMovie, FantasyMoviesArray } from "../../types/interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const FantasyForm: React.FC<FantasyMovie> = () => {
    const defaultValues = {
        defaultValues: {
          title: "",
          overview: "",
          genres:"", 
          release_date: "",
          runtime: 0,
          production_company: 1, 
        }
      }; 
    
      const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm<FantasyMovie>(defaultValues);
    
     const navigate = useNavigate(); // What does this do? 
     const [production_company, setProductionCompany] = useState(1); 
     const [open, setOpen] = useState(false);  //NEW
     const [fantasyMovie, setFantasyMovie] = useState<FantasyMovie | null>(null); 
     const [fantasyMoviesArray, setFantasyMoviesArray] = useState<FantasyMovie[]>([]);

      const handleProductionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductionCompany(Number(event.target.value));
      };
      
      const resetMyFantasy = () => {
        reset({
            title: "",
            overview: "",
            genres: "",
            release_date: "",
            runtime: 0,
            production_company: 1,
        });
    };

        const handleSnackClose = () => {
        setOpen(false);
        resetMyFantasy(); 
        navigate("/createFantasy");  // change navigation potentially
      };


    
        const onSubmit: SubmitHandler<FantasyMovie> = (movie) => {
      if (movie) {
        setFantasyMoviesArray(prev => [...prev, movie]);
        setFantasyMovie(null); 
      }

       // context.addReview(movie, review);
        setOpen(true); // NEW  
      };
    
  useEffect(() => {  //TESTING CONSOLE.LOG 
  console.log("Updated array:", fantasyMoviesArray);}, [fantasyMoviesArray]);

    
      return (
        <Box component="div" sx={styles.root}>
          <Typography component="h2" variant="h3">
           Create a Fantasy Movie 
          </Typography>

      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
         onClose={handleSnackClose}
        >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for creating a fantasy movie. 
          </Typography>
        </Alert>
      </Snackbar>

          <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Title is required" }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="title"
                  label="Movie's title: "
                  autoFocus
                />
              )}
            />
            {errors.title && (
              <Typography variant="h6" component="p">
                {errors.title.message}
              </Typography>
            )}

            <Controller
              name="overview"
              control={control}
              rules={{
                required: "Overview cannot be empty.",
                minLength: { value: 10, message: "Overview is too short" },
              }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label="Overview"
                  id="overview"
                  multiline
                  minRows={10}
                />
              )}
            />
            {errors.overview && (
              <Typography variant="h6" component="p">
                {errors.overview.message}
              </Typography>
            )}

            <Controller
              name="genres"
              control={control}
              rules={{
                required: "Genres cannot be empty.", 
              }}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label="Genres"
                  id="genres"
                  multiline
                  autoFocus
                />
              )}
            />
            {errors.genres && (
              <Typography variant="h6" component="p">
                {errors.genres.message}
              </Typography>
            )}

            <Controller
              name="release_date"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="release_date"
                  label="Release Date: "
                  autoFocus
                />
              )}
            />
            {errors?.release_date && (
              <Typography variant="h6" component="p">
                {errors.release_date?.message}
              </Typography>
            )}

              <Controller
              name="runtime"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  sx={{ width: "40ch" }}
                  variant="outlined"
                  margin="normal"
                  required
                  onChange={onChange}
                  value={value}
                  id="runtime"
                  label="Runtime: "
                  autoFocus
                />
              )}
            />
            {errors?.runtime && (
              <Typography variant="h6" component="p">
                {errors.runtime?.message}
              </Typography>
            )}
    
            <Controller
              control={control}
              name="production_company"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="production-company"
                  select
                  variant="outlined"
                  label="select Production Company"
                  value={production_company}
                  onChange={handleProductionChange}
                >
                  {production_companies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
    
            <Box >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={styles.submit}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="contained"
                color="secondary"
                sx={styles.submit}
                onClick={resetMyFantasy}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      );
    };
    

export default FantasyForm;
