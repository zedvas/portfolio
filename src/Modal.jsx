import { Close } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";
import ReactModal from "react-modal";

export const Modal = ({ reactModalIsOpen, closeReactModal, modalText }) => {
  ReactModal.setAppElement("#root");

  const modalStyle = {
    overlay: {
      margin: "0 auto",
      padding: 0,
      position: "fixed",
      zIndex: 9,
      top: 0,
      left: 0,
    },
    content: {
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--accent)",
      borderRadius: "20px",
      maxHeight: "500px",
      width: "320px",
      margin: "auto",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "1.1rem",
      overflow: "hidden"
    },
  };
  return (
    <>
      <ReactModal
        isOpen={reactModalIsOpen}
        onRequestClose={closeReactModal}
        style={modalStyle}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <Close onClick={closeReactModal} />
        </button>
        {/* <p style={{maxWidth: "250px"}}>{modalText}</p> */}
        <>{modalText}</>
      </ReactModal>
    </>
  );
};
