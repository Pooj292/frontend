import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";

export default function SingleGet() {
  const { id } = useParams();

  const [movie, setMovie] = useState([])

  useEffect(()=>{
    fetch(`${API}/get/${id}`,{
      method:"GET"
    })
    .then((data)=> data.json())
    .then((mvs)=> setMovie(mvs))
  })


  const navigate = useNavigate()

  return (
    <div>
      <img src={movie.poster}/>

      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <h4  className="movie-rating">  {movie.rating}</h4>
        </div>

        <p className="movie-description">{movie.summary}</p>

        <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1)}>Back</Button>
      </div>

     

    </div>
  );
}
