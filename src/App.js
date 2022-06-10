import "./App.css";
import { useState } from "react";
import Title from "./components/title";
import Modal from "./components/modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const handleTrue = () => setIsTrue(false);
  const handleFalse = () => setIsTrue(true);
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [isTrue, setIsTrue] = useState(true);
  const [events, setEvents] = useState([
    { title: "React", date: "2020-01-01", id: 1 },
    { title: "Next", date: "2020-02-01", id: 2 },
    { title: "Mendix", date: "2020-03-01", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };
  const handleClose = <button onClick={() => setShowModal(false)}>X</button>;

  const subtitle = showEvents ? "Droid will got rise!" : "Droid will got die!";
  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide event</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show event</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <button onClick={() => setShowModal(true)}>show modal</button>
      {showModal && (
        <Modal button={handleClose} isTrue={isTrue}>
          <p>{""}</p>
          <NewEventForm />
          <button onClick={isTrue ? handleTrue : handleFalse}>Change</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
