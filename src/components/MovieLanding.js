import React from "react";
import './MovieLanding.css';

const MovieLanding = () => {
    return (
        <div className="movie-booking-container">
            <header className="header">
                <h1 className="title">KAE Theaters</h1>
                <nav className="nav">
                    <a href="#movies">Movies</a>
                    <a href="#showtimes">Showtimes</a>
                    <a href="#seats">Seats</a>
                    <button className="search-button">Search</button>
                    <button className="book-button">Book</button>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h2>Browse and book movies with CineBook</h2>
                    <p>Discover the latest movies and book your tickets online!</p>
                </section>

                <section className="featured-movies">
                    <h3>Featured Movies</h3>
                    <div className="movie-cards">
                        {["Action", "Comedy", "Family", "Thriller", "Sci-Fi", "Romance"].map((genre, index) => (
                            <div className="movie-card" key={index}>
                                <img src={`images/${genre.toLowerCase()}.jpg`} alt={genre} />
                                <p>{genre}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="top-rated-movies">
                    <h3>Top-rated Movies</h3>
                    <div className="top-movie-cards">
                        {[
                            { title: "Action Packed", rating: 9, from: "$10/ticket" },
                            { title: "Comedy Central", rating: 9, from: "$12/ticket" },
                            { title: "Thrill Seeker", rating: 9, from: "$15/ticket" },
                            { title: "Sci-Fi Fanatic", rating: 9, from: "$14/ticket" },
                            { title: "Comedy Nights", rating: 9, from: "$8/ticket" },
                        ].map((movie, index) => (
                            <div className="top-movie-card" key={index}>
                                <img src={`images/${movie.title.toLowerCase().replace(/ /g, '-')}.jpg`} alt={movie.title} />
                                <p>{movie.title}</p>
                                <span>from {movie.from}</span>
                                <button className="details-button">Details</button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="exclusive-offers">
                    <h3>Exclusive Offers</h3>
                    <p>Get the best seats and exclusive deals for your favorite movies! Sign up now to receive special offers!</p>
                    <button className="signup-button">Sign up now</button>
                </section>
            </main>

            <footer className="footer">
                <p>KAE Theaters &copy; 2024 | Your ultimate movie booking platform since 2024</p>
                <nav className="footer-nav">
                    <a href="#help">Help Center</a>
                    <a href="#support">Support</a>
                    <a href="#how-it-works">How It Works</a>
                </nav>
            </footer>
        </div>
    );
};

export default MovieLanding;