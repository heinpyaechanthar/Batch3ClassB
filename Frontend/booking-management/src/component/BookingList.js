import BookingDetails from "./BookingDetails.js";

function displayDate(dateValue) {
  if (!dateValue) return "—";
  const date = new Date(`${dateValue}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function BookingCard({ booking, onEdit, onView }) {
  const statusClass = booking.status.toLowerCase();

  return (
    <article className="booking-card">
      <div className="student-avatar">
        <img src="/assets/icon.png" alt="Student mascot" />
      </div>

      <div className="student-summary">
        <h2>{booking.studentName}</h2>
        <p>{booking.parentName || "Parent name not added"}</p>
      </div>

      <div className="booking-facts">
        <div className="booking-fact status-fact">
          <img className="fact-icon status-icon" src="/assets/main.png" alt="" />
          <div>
            <span className="fact-label">Status</span>
            <strong className={`status-text ${statusClass}`}>{booking.status}</strong>
          </div>
        </div>
        <div className="booking-fact">
          <img className="fact-icon" src="/assets/date.png" alt="" />
          <div>
            <span className="fact-label">Date</span>
            <strong>{displayDate(booking.bookingDate)}</strong>
          </div>
        </div>
        <div className="booking-fact">
          <img className="fact-icon" src="/assets/time.png" alt="" />
          <div>
            <span className="fact-label">Time</span>
            <strong>{booking.bookingTime || "10:00 AM"}</strong>
          </div>
        </div>
      </div>

      <div className="booking-actions">
        <button
          className="icon-button"
          type="button"
          onClick={() => onEdit(booking)}
          aria-label={`Edit ${booking.studentName} booking`}
          title="Edit booking"
        >
          <img src="/assets/edit.png" alt="" />
        </button>
        <button
          className="icon-button"
          type="button"
          onClick={() => onView(booking)}
          aria-label={`View ${booking.studentName} booking`}
          title="View booking details"
        >
          <img src="/assets/view.png" alt="" />
        </button>
      </div>
    </article>
  );
}

export default function BookingList({
  bookings,
  onCreate,
  onEdit,
  onView,
  onCloseDetails,
  bookingToView,
}) {
  return (
    <main className="page-shell list-page">
      <header className="list-header">
        <div className="heading-group">
          <span className="eyebrow">LEVEL PLACEMENT TEST</span>
          <h1>Booking List</h1>
          <p>Keep every student booking clear and organized.</p>
        </div>
        <button className="primary-button create-button" type="button" onClick={onCreate}>
          <span className="plus-icon" aria-hidden="true">+</span>
          Create Booking
        </button>
      </header>

      <section className="booking-list" aria-label="Student bookings">
        {bookings.length === 0 ? (
          <div className="empty-state">
            <img src="/assets/icon.png" alt="" />
            <h2>No bookings yet</h2>
            <p>Create your first booking to see it here.</p>
            <button className="primary-button" type="button" onClick={onCreate}>
              Create Booking
            </button>
          </div>
        ) : (
          bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onEdit={onEdit}
              onView={onView}
            />
          ))
        )}
      </section>

      <footer className="page-footer">
        <span>Placement Test Booking</span>
        <span>{bookings.length} {bookings.length === 1 ? "booking" : "bookings"}</span>
      </footer>

      {bookingToView && (
        <BookingDetails booking={bookingToView} onClose={onCloseDetails} />
      )}
    </main>
  );
}
