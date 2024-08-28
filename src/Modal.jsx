import { Close } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";
import ReactModal from "react-modal";

export const Modal = ({reactModalIsOpen, closeReactModal}) => {


  ReactModal.setAppElement("#root");

  const modalStyle = {
    overlay: {
      margin: "0 auto",
      padding: 0,
      position: "fixed",
      zIndex: 9,
      top: 0,
      left: 0
    },
    content: {
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--green)",
      borderRadius: "20px",
      height: "300px",
      width: "300px",
      margin: "auto",
    },
  };
  return (
    <>
      <ReactModal
        isOpen={reactModalIsOpen}
        onRequestClose={closeReactModal}
        style={modalStyle}
      >
        <Close sx={{ border: "1px solid red" }} />
        <button onClick={closeReactModal}>✖️ Close Modal</button>
      </ReactModal>
    </>
  );
};
