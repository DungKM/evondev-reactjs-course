import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const Modal = ({ open = false, onClose = () => {} }) => {
  if (!open) return null; // Nếu không mở modal, không render gì cả

  return ReactDOM.createPortal(
    React.createElement(
      "div",
      { className: "modal" },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "span",
          { className: "close-button", onClick: onClose },
          "×"
        )
      )
    ),
    document.getElementById("root") // Định vị modal ra ngoài DOM chính
  );
};
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
