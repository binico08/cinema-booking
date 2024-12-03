import React, { useState } from "react";
import './TicketBooking.css'; // Import the corresponding CSS file

const TicketBooking = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const movies = [
    { id: 1, title: "The Great Adventure", duration: "120 min" },
    { id: 2, title: "Mystery Night", duration: "100 min" },
  ];

  const showtimes = ["12:00 PM", "03:00 PM", "06:00 PM"];
  const seatOptions = ["A1", "A2", "A3", "A4", "A5"];

  const totalPrice = selectedSeats.length * 12.5; // Assuming each seat costs $12.5

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
    // Booking confirmation logic here
    alert("Booking Confirmed!");
  };

  return (
    <div className="ticket-booking-container">
      <header className="header">
        <h1 className="title">CineX</h1>
      </header>

      <main>
        <section className="movie-selection">
          <h2>Select a Movie</h2>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <p>{movie.title}</p>
              <p>Duration: {movie.duration}</p>
              <button className={selectedMovie === movie ? "selected" : "select"} onClick={() => setSelectedMovie(movie)}>Select</button>
            </div>
          ))}
        </section>

        <section className="showtime-selection">
          <h2>Select Showtime & Seats</h2>
          <h3>Showtimes</h3>
          {showtimes.map((time) => (
            <button key={time} className="select" onClick={() => setSelectedShowtime(time)}>
              {time}
            </button>
          ))}
          <h3>Seats</h3>
          {seatOptions.map((seat) => (
            <button
              key={seat}
              className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
              onClick={() => handleSeatSelection(seat)}
            >
              {seat}
            </button>
          ))}
        </section>

        <section className="booking-details">
          <h2>Booking Details & Payment</h2>
          <h3>Booking Summary</h3>
          {selectedMovie && (
            <div>
              <p>Movie: {selectedMovie.title}</p>
              <p>Showtime: {selectedShowtime}</p>
              <p>Seats: {selectedSeats.join(", ")}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          )}
          <h3>Payment Options</h3>
          <label>
            <input
              type="radio"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              value="Gift Card"
              checked={paymentMethod === "Gift Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Gift Card
          </label>
          <button className="confirm" onClick={handleConfirmBooking}>Confirm Booking</button>
        </section>
      </main>

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

export default TicketBooking;