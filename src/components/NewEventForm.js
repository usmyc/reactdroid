import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent, setShowModal }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("amsterdam");
  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("amsterdam");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      date,
      location,
      id: Math.floor(Math.random() * 100000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
    setShowModal(false);
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="amsterdam">Amsterdam</option>
          <option value="berlin">Berlin</option>
          <option value="london">London</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
