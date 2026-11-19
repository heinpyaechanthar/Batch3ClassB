import { useEffect, useState } from "react";
import BookingList from "./component/BookingList.js";
import BookingForm from "./component/BookingForm.js";
import { demoBookings } from "./data/demoBookings.js";

const STORAGE_KEY = "placement-test-bookings";

function getSavedBookings() {
  try {
    const savedBookings = window.localStorage.getItem(STORAGE_KEY);
    return savedBookings ? JSON.parse(savedBookings) : demoBookings;
  } catch {
    return demoBookings;
  }
}

export default function App() {
  const [bookings, setBookings] = useState(getSavedBookings);
  const [page, setPage] = useState("list");
  const [bookingToEdit, setBookingToEdit] = useState(null);
  const [bookingToView, setBookingToView] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch {
      // The app still works for this visit if browser storage is full.
    }
  }, [bookings]);

  function openCreatePage() {
    setBookingToEdit(null);
    setPage("create");
  }

  function openEditPage(booking) {
    setBookingToEdit(booking);
    setPage("edit");
  }

  function saveNewBooking(newBooking) {
    setBookings((currentBookings) => [newBooking, ...currentBookings]);
    setPage("list");
  }

  function saveUpdatedBooking(updatedBooking) {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === updatedBooking.id ? updatedBooking : booking,
      ),
    );
    setBookingToEdit(null);
    setPage("list");
  }

  function cancelForm() {
    setBookingToEdit(null);
    setPage("list");
  }

  if (page === "create") {
    return (
      <BookingForm
        key="create-booking"
        mode="create"
        onSave={saveNewBooking}
        onCancel={cancelForm}
      />
    );
  }

  if (page === "edit" && bookingToEdit) {
    return (
      <BookingForm
        key={bookingToEdit.id}
        mode="edit"
        initialBooking={bookingToEdit}
        onSave={saveUpdatedBooking}
        onCancel={cancelForm}
      />
    );
  }

  return (
    <BookingList
      bookings={bookings}
      onCreate={openCreatePage}
      onEdit={openEditPage}
      onView={setBookingToView}
      onCloseDetails={() => setBookingToView(null)}
      bookingToView={bookingToView}
    />
  );
}
