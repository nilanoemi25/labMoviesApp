import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { Cast } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";




const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const CastDetails: React.FC<Cast> = (cast) => {
    console.log(cast);
    const actresses = cast.cast.filter(member => member.gender === 1); 
    const actors = cast.cast.filter(member => member.gender === 2); 
    const top10CastF = actresses.slice(0,10);
    const top10CastM = actors.slice(0,10);

    return (
        <>
            <Typography variant="h4" component="h3">
                Cast Details 
            </Typography>

            <Typography variant="h6" component="p">
            <h2> Top Female Actresses </h2>
             <ul>
            {top10CastF.map((member, index) => (
                <li key={member.id || index}>{"Actress: "}{member.name}</li>
            ))}
            </ul>
            </Typography>
             <Paper component="ul" sx={styles.chipSet}>
             <Chip icon={<AccessTimeIcon />} label={`${top10CastF[0].known_for_department}`} />
             <Chip
            icon={<StarRate />}
            label={`Gender Code: ${top10CastF[0].gender}`}/>
            <Chip label={`Popularity: ${top10CastF[0].popularity}`} />
            </Paper>

            <Typography variant="h6" component="p">
            <h2> Top Male Actors </h2>
             <ul>
            {top10CastM.map((member, index) => (
                <li key={member.id || index}>{"Actress: "}{member.name}</li>
            ))}
            </ul>
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
             <Chip icon={<AccessTimeIcon />} label={`${top10CastM[0].known_for_department}`} />
             <Chip
            icon={<StarRate />}
            label={`Gender Code: ${top10CastM[0].gender}`}/>
            <Chip label={`Popularity: ${top10CastM[0].popularity}`} />
            </Paper>

        </>
    );
};
export default CastDetails;
