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
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const handleClick = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };
  // const handleClose = <button onClick={() => setShowModal(false)}>X</button>;

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
        <Modal isTrue={isTrue}>
          <p>{""}</p>
          <NewEventForm addEvent={addEvent} setShowModal={setShowModal} />
          <button onClick={isTrue ? handleTrue : handleFalse}>Change Color</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
