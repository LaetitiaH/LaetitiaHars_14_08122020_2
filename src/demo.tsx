import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Modal from "./lib/Modal";

export const useModal = (): {
  isShowing: boolean;
  toggleShowing: () => void;
} => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowing = (): void => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggleShowing,
  };
};

const App: React.FC = (): JSX.Element => {
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
