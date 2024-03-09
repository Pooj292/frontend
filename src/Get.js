import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react'

import {useNavigate} from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Button from "@mui/material/Button";
import { API } from './global';

export default function Get({ list , getData}) {




    const navigate = useNavigate()

    const deleteMovie = async (id) => {
     
            let ask = window.confirm("This Data will delete")
            if (ask){
              getData()
                let resDelete =await axios.delete(`${API}/delete/${id}`);
                console.log(resDelete)        
            }
    };

    return (
        <Card  className="movie-container">
            <img className="movie-poster" src={list.poster} />
           

         
<div className="button">
<Button variant="contained"  type="submit" onClick={()=>navigate(list._id)}>View</Button>

<Button variant="contained"  type="submit" onClick={()=>deleteMovie(list._id)}>Delete</Button>

</div>

        </Card >
    )
}