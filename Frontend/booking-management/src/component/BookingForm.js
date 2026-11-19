import { useState } from "react";

function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStartingValues(booking) {
  if (booking) return { ...booking };

  return {
    studentName: "",
    parentName: "",
    dateOfBirth: "",
    parentPhone: "",
    bookingDate: getToday(),
    bookingTime: "10:00 AM",
    testFees: "10000",
    paymentMethod: "",
    paymentSlipName: "",
    paymentSlipData: "",
  };
}

function Field({ label, name, type = "text", value, onChange, required = true, placeholder = "" }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

export default function BookingForm({ mode, initialBooking, onSave, onCancel }) {
  const [formData, setFormData] = useState(() => getStartingValues(initialBooking));
  const isEditing = mode === "edit";

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  }

  function uploadSlip(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      window.alert("Please choose an image smaller than 2 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((currentData) => ({
        ...currentData,
        paymentSlipName: file.name,
        paymentSlipData: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  }

  function submitForm(event) {
    event.preventDefault();

    if (!isEditing && !formData.paymentSlipData) {
      window.alert("Please upload the payment slip image before booking.");
      return;
    }

    const booking = {
      ...formData,
      id: initialBooking ? initialBooking.id : `booking-${Date.now()}`,
      status: initialBooking ? initialBooking.status : "PENDING",
    };
    onSave(booking);
  }

  return (
    <main className="page-shell form-page">
      <button className="back-link" type="button" onClick={onCancel}>
        <img src="/assets/back.png" alt="" />
        <span>Back to Booking List</span>
      </button>

      <div className="form-heading">
        <span className="eyebrow">LEVEL PLACEMENT TEST</span>
        <h1>{isEditing ? "Update Booking Information" : "Level Placement Test Booking Information"}</h1>
        <p>{isEditing ? "Review and update the student's booking details." : "Enter the student's details to reserve a test time."}</p>
      </div>

      <section className="form-panel">
        <form className="booking-form" onSubmit={submitForm}>
          <div className="form-grid">
            <Field label="Student Name" name="studentName" value={formData.studentName} onChange={updateField} placeholder="Enter student name" />
            <Field label="Parent Name" name="parentName" value={formData.parentName} onChange={updateField} placeholder="Enter parent name" />
            <Field label="Student's Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={updateField} />
            <Field label="Parent Phone No." name="parentPhone" type="tel" value={formData.parentPhone} onChange={updateField} placeholder="09xxxxxxxxx" />
            <Field label="Booking Date" name="bookingDate" type="date" value={formData.bookingDate} onChange={updateField} />

            <label className="form-field">
              <span>Booking Time Slot</span>
              <select name="bookingTime" value={formData.bookingTime} onChange={updateField} required>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
              </select>
            </label>
          </div>

          <label className="form-field fees-field">
            <span>Level Placement Test Charges</span>
            <div className="readonly-value">
              <span>MMK</span>
              <input name="testFees" value="10,000" readOnly aria-label="Test fees" />
            </div>
          </label>

          <label className="form-field">
            <span>Payment Method</span>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={updateField} required>
              <option value="">Please choose payment method</option>
              <option value="KBZPay">KBZPay</option>
              <option value="WavePay">WavePay</option>
              <option value="AYA Pay">AYA Pay</option>
              <option value="CB Pay">CB Pay</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </label>

          <div className="form-field upload-field">
            <span>Payment Slip</span>
            <div className="upload-row">
              <label className="upload-control">
                <input type="file" accept="image/*" onChange={uploadSlip} />
                <span className="upload-icon" aria-hidden="true">↑</span>
                <span className="upload-copy">{formData.paymentSlipName || "Choose payment slip image"}</span>
              </label>
              {formData.paymentSlipData ? (
                <a className="slip-link" href={formData.paymentSlipData} target="_blank" rel="noreferrer">
                  View image ↗
                </a>
              ) : (
                <span className="no-slip">No image selected</span>
              )}
            </div>
            {formData.paymentSlipData && (
              <a className="slip-name-link" href={formData.paymentSlipData} target="_blank" rel="noreferrer">
                Open {formData.paymentSlipName || "uploaded payment slip"}
              </a>
            )}
          </div>

          <div className="form-actions">
            <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
            <button className={`primary-button submit-button ${isEditing ? "update-button" : ""}`} type="submit">
              {isEditing ? "Update Booking" : "Book Test"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
