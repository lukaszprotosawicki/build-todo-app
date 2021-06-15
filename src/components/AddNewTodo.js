import React, { useState } from "react";
import Modal from "./Modal";
import { Bell, CalendarDay } from "react-bootstrap-icons";

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>{" "}
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form>
          <div classNam="text">
            <h3>Add New to do!</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="To do ..."
              autoFocus
            />
          </div>
          <div className="remind">
            <Bell />
            <p>Remind Me!</p>
          </div>
          <div className="pick-day">
            <div className="title">
              <CalendarDay />
              <p>Choose a day</p>
            </div>
            date-picker
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddNewTodo;
