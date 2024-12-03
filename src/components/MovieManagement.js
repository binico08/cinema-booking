import React, { useState } from "react";

const MovieManagement = ({ setMovies }) => {
  const initialMovies = [
    { id: 1, title: "The Great Adventure", genre: "Adventure", duration: "120 min", language: "English", rating: "PG", image: "/images/great-adventure.svg" },
    { id: 2, title: "Mystery Night", genre: "Mystery", duration: "100 min", language: "English", rating: "PG-13", image: "/images/murder-mystery.svg" },
  ];

  const [movies, setLocalMovies] = useState(initialMovies);
  const [newMovie, setNewMovie] = useState({ title: "", genre: "", duration: "", language: "", rating: "", showtimes: [] });

  const handleAddMovie = () => {
    setLocalMovies([...movies, { ...newMovie, id: Date.now() }]);
    setNewMovie({ title: "", genre: "", duration: "", language: "", rating: "", showtimes: [] });
  };

  const handleDeleteMovie = (id) => {
    setLocalMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h2>Movie Management</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newMovie.genre}
          onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration"
          value={newMovie.duration}
          onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Language"
          value={newMovie.language}
          onChange={(e) => setNewMovie({ ...newMovie, language: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.genre}
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <p>KAE Theaters &copy; 2024 | Your ultimate movie booking platform since 1997</p>
        <nav className="footer-nav">
          <a href="#help">Help Center</a>
          <a href="#support">Support</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
      </footer>
    </div>
  );
};

export default MovieManagement;