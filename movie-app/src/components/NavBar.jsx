import React from "react";
import "../styles/NavBar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trending";

export default function NavBar() {
  return (
    <>
      <nav className="">
        <div className="nav-options">
          <h1>Huku</h1>

          <NavLink className="nav-link" to="">
            <span>Movies</span>
          </NavLink>
          <NavLink className="nav-link" to="TvShows">
            <span>Tv Shows</span>
          </NavLink>
          <NavLink className="nav-link" to="Trending">
            <span>Trending</span>
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Movies />} />
        <Route path="TvShows" element={<TvShows />} />
        <Route path="Trending" element={<Trending />} />
      </Routes>
    </>
  );
}
