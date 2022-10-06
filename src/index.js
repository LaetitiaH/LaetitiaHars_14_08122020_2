import React, { useState } from "react";
import Modal from "./lib/Modal";
import ReactDOM from "react-dom/client";

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowing = () => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggleShowing,
  };
};

const App = () => {
  const { isShowing, toggleShowing } = useModal();

  return (
    <div className="App">
      <button className="modal-toggle" onClick={toggleShowing}>
        Show modal
      </button>

      <Modal
        isShowing={isShowing}
        onRequestClose={toggleShowing}
        clickClose={true}
        escapeClose={true}
        showClose={true}
      >
        <div>test</div>
      </Modal>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
