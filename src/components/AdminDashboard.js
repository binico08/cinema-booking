import React from "react";
import MovieManagement from "./MovieManagement";
import ShowtimeManagement from "./ShowtimeManagement";
import TicketBooking from "./TicketBooking";

const AdminDashboard = ({ users, movies, setMovies, showtimes, setShowtimes, bookings, setBookings }) => {
    const adminUsers = users.filter((user) => user.role === "admin");
  
    return (
      <div>
        <h2>Admin Dashboard</h2>
        {adminUsers.length > 0 ? (
          <div>
            <h3>Admin Tools</h3>
            {/* Admin features: Movie Management */}
            <MovieManagement movies={movies} setMovies={setMovies} />
            {/* Admin features: Showtime Management */}
            <ShowtimeManagement movies={movies} showtimes={showtimes} setShowtimes={setShowtimes} />
            {/* Admin features: Booking Management */}
            <TicketBooking bookings={bookings} setBookings={setBookings} />
            {/* Additional admin-specific functionalities can be added here */}
          </div>
        ) : (
          <p>No admins are currently registered. Add an admin user to enable this section.</p>
        )}

        <footer className="footer">
            <p>KAE Cinemas &copy; 2024 | Your ultimate movie booking platform since 2024</p>
            <nav className="footer-nav">
                <a href="#help">Help Center</a>
                <a href="#support">Support</a>
                <a href="#how-it-works">How It Works</a>
            </nav>
        </footer>
      </div>
      
    );
};

export default AdminDashboard;