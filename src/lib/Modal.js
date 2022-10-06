import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import PropTypes from "prop-types";
import { ESCAPE_CODE } from "./variables";

/**
 * Display and close Modal
 * @function Modal
 * @param  {boolean} isShowing: Open modal if true
 * @param  {function} onRequestClose: Function to be executed when the modal is closed
 * @param  {boolean} clickClose: Allows the user to close the modal by clicking the overlay
 * @param  {boolean} escapeClose: Allows the user to close the modal by pressing `ESC`
 * @param  {boolean} showClose: Shows a (X) icon button in the top-right corner
 * @param  {string} closeText: Text content for the close <button>
 * @param  {string} title:  Text content for the modal title
 * @param  {string} closeClass: Add additional class(es) to the close <button> tag
 * @param  {string} modalClass: CSS class added to the element being displayed in the modal
 * @param  {string} overlayClass: CSS class added to the overlay
 * @param  {number} fadeDuration: Number of milliseconds the fade transition takes (0 means no transition)
 * @param  {Object} modalContent: Object containing the content of the modal
 * @param  {string} modalContent.children: Content for the modal
 *
 * @return {ReactPortal | null}
 * @author Laetitia Hars
 * @version 1.0
 */

const Modal = ({
  isShowing,
  onRequestClose,
  title,
  clickClose,
  escapeClose,
  showClose,
  closeText,
  closeClass,
  modalClass,
  overlayClass,
  fadeDuration,
  ...modalContent
}) => {
  const onCLickOutside = (event) => {
    event.stopPropagation();
    const elementClicked = event.target.className;
    if (
      elementClicked.includes("overlay") ||
      elementClicked.includes("modal-wrapper")
    ) {
      return onRequestClose();
    }
  };

  const animationOverlayStyle = {
    animation: `${fadeDuration}ms linear opacity`,
  };

  useEffect(() => {
    // Trigger if clicked on outside of element
    const handleEsc = (event) => {
      if (event.keyCode === ESCAPE_CODE && !escapeClose) {
        return onRequestClose();
      }
    };
    // Bind the event listener
    window.addEventListener("keydown", handleEsc);

    // Unbind the event listener on clean up
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [escapeClose, onRequestClose]);

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div
            className={`modal-overlay ${overlayClass}`}
            onClick={clickClose && onCLickOutside}
            style={animationOverlayStyle}
          >
            <div className="modal-wrapper">
              <div className={`modal ${modalClass}`}>
                {title && (
                  <div className="modal-header">
                    <h4>{title}</h4>
                  </div>
                )}
                {showClose && (
                  <button
                    aria-label={closeText}
                    type="button"
                    className={`modal-close-button ${closeClass}`}
                    onClick={onRequestClose}
                  >
                    <span>&times;</span>
                  </button>
                )}
                <div className="modal-body">{modalContent.children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default Modal;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  clickClose: PropTypes.bool,
  escapeClose: PropTypes.bool,
  showClose: PropTypes.bool,
  closeText: PropTypes.string,
  title: PropTypes.string,
  closeClass: PropTypes.string,
  modalClass: PropTypes.string,
  overlayClass: PropTypes.string,
  fadeDuration: PropTypes.number,
  modalContent: PropTypes.shape({ children: PropTypes.string }),
};

Modal.defaultProps = {
  isShowing: false,
  clickClose: true,
  escapeClose: true,
  showClose: true,
  closeText: "Close",
  title: null,
  closeClass: "",
  modalClass: "",
  overlayClass: "",
  fadeDuration: 250,
};
