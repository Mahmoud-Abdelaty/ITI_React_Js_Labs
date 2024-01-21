import React from "react";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import "../styles/Movies.css";

export default function Trending() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const MoviesApi = "https://api.themoviedb.org/3/movie/top_rated";
  const ImagesApi = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    axios
      .get(MoviesApi, {
        params: {
          api_key: "9813ce01a72ca1bd2ae25f091898b1c7",
        },
      })
      .then(({ data }) => {
        const result = data.results;
        setData(result);
        console.log(result);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [error]);

  return (
    <>
      <div className="movies-container">
        {loading ? (
          <CircularProgress />
        ) : (
          data?.map((e) => (
            <div className="container" key={e.id}>
              <img
                src={
                  e.poster_path
                    ? `${ImagesApi}${e.poster_path}`
                    : "src/imageNotFound.png"
                }
                alt="dd"
              />
              <h3 id="smaller-Text">{e.title}</h3>
            </div>
          ))
        )}
      </div>
    </>
  );
}
