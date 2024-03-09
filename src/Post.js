import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export default function Post() {

  const navigate = useNavigate()

  const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required(),
    trailer: yup.string().required(),
    rating: yup.string().required(),
    summary: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      trailer: "",
      rating: "",
      summary: "",
    },

    validationSchema: movieValidationSchema,

    onSubmit: (newMovie) => {
      console.log("Form Values:", newMovie)
      addMovie(newMovie)
    },

  })



  const addMovie = (newMovie) => {

    ////-----> Follow 3 step's <-----////

    //// Step's
    //// 1. Method => POST
    //// 2. body => data & JSON(string)
    //// 3. header => JSON

    fetch(`${API}/post`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/get"));

  };

  return (
    <form className="addForm" onSubmit={formik.handleSubmit}>
      <h1>Add New</h1>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}

      />
      <TextField
        id="outlined-basic"
        label="image"
        variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster"
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}

      />
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}

      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating"
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}

      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}

      />

      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}
