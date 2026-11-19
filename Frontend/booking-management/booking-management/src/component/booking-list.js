"use client";

export default function BookingList({ bookings, onCreate, onEdit }) {
  return (
    <main className="list-page">
      <div className="list-heading">
        <h1>Booking List</h1>
        <button onClick={onCreate}>Create Booking</button>
      </div>
      <div className="booking-items">
        {bookings.length === 0 && (
          <div className="empty-state">
            <img src="/assets/icon.png" alt="booking" />
            <h2>No bookings yet</h2>
            <p>Create your first placement test booking.</p>
          </div>
        )}
        {bookings.map((booking, index) => (
          <article className="booking-card" key={booking.id || index}>
            <img className="student-image" src="/assets/icon.png" alt="Student" />
            <div className="student-info">
              <h2>{booking.studentName}</h2>
              <p>{booking.parentName}</p>
              <div className="card-date">
                <img src="/assets/date.png" alt="Date" />
                <span><small>Date</small><strong>{booking.bookingDate || "Not selected"}</strong></span>
              </div>
            </div>
            <div className="booking-info">
              <div>
               <span className="info-label"><img src="/assets/main.png" alt="Time" /> Status</span>
                <strong className={`status ${booking.status || "pending"}`}>{(booking.status || "pending").toUpperCase()}</strong>
              </div>
              <div>
                <span className="info-label"><img src="/assets/time.png" alt="Time" /> Time</span>
                <strong>{booking.bookingTime || "10:00 AM"}</strong>
              </div>
            </div>
            <div className="card-actions">
              <button onClick={() => onEdit(index)} title="Edit booking"><img src="/assets/edit.png" alt="Edit" /></button>
              <button title="View booking"><img src="/assets/view.png" alt="View" /></button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
