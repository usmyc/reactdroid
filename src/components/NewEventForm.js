import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  return (
    <form className="new-event-form">
      {/* <label htmlFor="title">Event Title:</label>
        <input type="text" id="title" /> */}
      <label>
        <span>Event Title:{title}</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Event Date:{date}</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}
