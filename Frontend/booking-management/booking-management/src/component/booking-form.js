"use client";
import { useState } from "react";
const emptyBooking = {
  studentName: "",
  parentName: "",
  dob: "",
  phone: "",
  bookingDate: "",
  bookingTime: "10:00",
  paymentMethod: "",
  paymentSlip: "",
};
function timeToInput(time) {
  if (!time) return "10:00";
  if (/^\d{2}:\d{2}$/.test(time)) return time;
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return "10:00";
  let hour = Number(match[1]);
  if (match[3].toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (match[3].toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${match[2]}`;
}
export function formatTime(time) {
  if (!time) return "10:00 AM";
  const [hourText, minute] = time.split(":");
  let hour = Number(hourText);
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${String(hour).padStart(2, "0")}:${minute} ${period}`;
}
export default function BookingForm({ booking, isUpdate, onSubmit, onBack }) {
  const [form, setForm] = useState({
    ...emptyBooking,
    ...booking,
    bookingTime: timeToInput(booking?.bookingTime),
  });
  const changeValue = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const uploadSlip = (event) => {
    const file = event.target.files[0];
    if (file) setForm({ ...form, paymentSlip: file.name });
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (
      !form.studentName ||
      !form.parentName ||
      !form.bookingDate ||
      !form.bookingTime
    ) {
      alert("Please fill in the required information.");
      return;
    }
    onSubmit({ ...form, bookingTime: formatTime(form.bookingTime) });
  };
  return (
    <main className="form-page">
      <button className="back-button" onClick={onBack}>
        <img src="/assets/back.png" alt="Back" />
        {isUpdate
          ? "Update Booking Information"
          : "Level Placement Test Booking Information"}
      </button>
      <section className="form-card">
        <form onSubmit={submitForm}>
          <div className="form-grid">
            <label>
              Student Name
              <input
                name="studentName"
                value={form.studentName}
                onChange={changeValue}
                
              />
            </label>
            <label>
              Parent Name
              <input
                name="parentName"
                value={form.parentName}
                onChange={changeValue}
                
              />
            </label>
            <label>
              Student&apos;s Date of Birth
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={changeValue}
              />
            </label>
            <label>
              Parent Phone No.
              <input
                name="phone"
                value={form.phone}
                onChange={changeValue}
                
              />
            </label>
            <label>
              Booking Date
              <input
                type="date"
                name="bookingDate"
                value={form.bookingDate}
                onChange={changeValue}
              />
            </label>
            <label>
              Booking Time
              <input
                type="time"
                name="bookingTime"
                value={form.bookingTime}
                onChange={changeValue}
              />
            </label>
          </div>
          <label>
            Level Placement Test Charges
            <input className="disabled-input" value="10,000 MMK" readOnly />
          </label>
          <label>
            Payment Method
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={changeValue}
            >
              <option value="">Please choose payment method</option>
              <option value="KBZ Pay">KBZ Pay</option>
              <option value="Wave Money">Wave Money</option>
              <option value="AYA Pay">AYA Pay</option>
            </select>
          </label>
          <label>
            Payment Slip
            <div className="upload-row">
              <span className="upload-icon">↥</span>
              <input type="file" accept="image/*" onChange={uploadSlip} />
              <span className="file-name">
                {form.paymentSlip || "Please upload your payment slip"}
              </span>
            </div>
          </label>
          <button
            className={isUpdate ? "submit-button update" : "submit-button"}
            type="submit"
          >
            {isUpdate ? "Update Booking" : "Book Test"}
          </button>
        </form>
      </section>
    </main>
  );
}
