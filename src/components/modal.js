import "./Modal.css";
export default function Modal({ button, children, isTrue }) {
  return (
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{ border: "4px solid",  borderColor: isTrue ? "blueviolet" : "black" }}
      >
        {button}
        <h2>Modal</h2>
        <img
          id="modal-img"
          src="https://images.unsplash.com/photo-1654524145261-b78efad36aea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
          alt="hands"
        />
        {children}
      </div>
    </div>
  );
}
