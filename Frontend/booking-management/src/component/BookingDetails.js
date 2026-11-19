function formatDate(dateValue) {
  if (!dateValue) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${dateValue}T12:00:00`));
}

export default function BookingDetails({ booking, onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close details">×</button>
        <span className="eyebrow">BOOKING DETAILS</span>
        <h2 id="details-title">{booking.studentName}</h2>
        <p className="modal-subtitle">Level Placement Test</p>
        <div className="details-grid">
          <div><span>Parent Name</span><strong>{booking.parentName || "—"}</strong></div>
          <div><span>Parent Phone</span><strong>{booking.parentPhone || "—"}</strong></div>
          <div><span>Date of Birth</span><strong>{formatDate(booking.dateOfBirth)}</strong></div>
          <div><span>Booking Date</span><strong>{formatDate(booking.bookingDate)}</strong></div>
          <div><span>Time Slot</span><strong>{booking.bookingTime}</strong></div>
          <div><span>Payment</span><strong>{booking.paymentMethod || "—"}</strong></div>
        </div>
        {booking.paymentSlipData ? (
          <a className="modal-slip-link" href={booking.paymentSlipData} target="_blank" rel="noreferrer">
            Open payment slip ↗
          </a>
        ) : (
          <p className="no-slip modal-no-slip">No payment slip attached.</p>
        )}
        <button className="primary-button modal-done" type="button" onClick={onClose}>Done</button>
      </section>
    </div>
  );
}
