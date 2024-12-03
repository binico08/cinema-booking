import React, { useState } from "react";
import TicketBooking from "./TicketBooking";

const UserDashboard = ({ users, bookings, movies, showtimes, setBookings }) => {
  // State to manage the selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // State to manage the selected showtime
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  // Filter out regular users from the users list
  const regularUsers = users.filter((user) => user.role === "regular");

  return (
    <div>
      <h2>User Dashboard</h2>

      {regularUsers.length > 0 ? (
        <div>
          <h3>User Tools</h3>
          
          {/* Browse Movies Section */}
          <h4>Browse Movies</h4>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <strong>{movie.title}</strong> - {movie.rating}
                <br />
                <strong>Showtimes:</strong>
                <ul>
                  {showtimes
                    .filter((showtime) => showtime.movieId === movie.id)
                    .map((showtime) => (
                      <li key={showtime.id}>
                        {showtime.date} {showtime.time} (Seats Available: {showtime.availableSeats})
                        <button
                          onClick={() => {
                            setSelectedMovie(movie);
                            setSelectedShowtime(showtime);
                          }}
                        >
                          Select Showtime
                        </button>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Display Selected Movie and Showtime */}
          {selectedMovie && selectedShowtime && (
            <div>
              <h4>Selected Movie and Showtime</h4>
              <p>
                <strong>Movie:</strong> {selectedMovie.title}
                <br />
                <strong>Showtime:</strong> {selectedShowtime.date} {selectedShowtime.time}
              </p>
            </div>
          )}

          {/* Ticket Booking Section for Regular Users */}
          <h4>Book a Ticket</h4>
          <TicketBooking
            movies={movies}
            showtimes={showtimes}
            bookings={bookings}
            setBookings={setBookings}
          />
        </div>
      ) : (
        <p>No regular users are currently registered. Add a regular user to enable this section.</p>
      )}
    </div>
  );
};

export default UserDashboard;