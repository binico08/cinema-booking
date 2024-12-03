import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserAccountManagement from './components/UserAccountManagement';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import MovieManagement from './components/MovieManagement';
import ShowtimeManagement from './components/ShowtimeManagement';
import TicketBooking from './components/TicketBooking';
import MovieLanding from './components/MovieLanding';
import './App.css'; // CSS file for styling

const App = () => {
  const [users, setUsers] = useState([]);
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [bookings, setBookings] = useState([]);
  
  return (
    <Router>
      <div>
        <header className="navbar">
          <h1 className="navbar-title">Cinema Booking System</h1>
          <nav className="navbar-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user-management">User Account Management</Link></li>
              <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
              <li><Link to="/user-dashboard">User Dashboard</Link></li>
              <li><Link to="/movie-management">Movie Management</Link></li>
              <li><Link to="/showtime-management">Showtime Management</Link></li>
              <li><Link to="/ticket-booking">Ticket Booking</Link></li>
              <li><Link to="/movie-landing">Landing Page</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/user-management"
              element={<UserAccountManagement users={users} setUsers={setUsers} />}
            />
            <Route
              path="/admin-dashboard"
              element={
                <AdminDashboard
                  users={users}
                  movies={movies}
                  setMovies={setMovies}
                  showtimes={showtimes}
                  setShowtimes={setShowtimes}
                  bookings={bookings}
                  setBookings={setBookings}
                />
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <UserDashboard
                  users={users}
                  bookings={bookings}
                  movies={movies}
                  showtimes={showtimes}
                  setBookings={setBookings}
                />
              }
            />
            <Route
              path="/movie-management"
              element={<MovieManagement movies={movies} setMovies={setMovies} />}
            />
            <Route
              path="/movie-landing"
              element={<MovieLanding movies={movies} setMovies={setMovies} />}
            />
            <Route
              path="/showtime-management"
              element={
                <ShowtimeManagement
                  movies={movies}
                  showtimes={showtimes}
                  setShowtimes={setShowtimes}
                />
              }
            />
            <Route
              path="/ticket-booking"
              element={
                <TicketBooking
                  movies={movies}
                  showtimes={showtimes}
                  bookings={bookings}
                  setBookings={setBookings}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const HomePage = () => (
  <div className="App">
    <h1>Welcome to the Cinema Booking System</h1>
    <p>Please navigate through the menu to access the features.</p>
  </div>
);

export default App;
