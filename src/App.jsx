import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Nav } from "./Nav";
import "./css/app.css";
import { Modal } from "./Modal";
import { useState } from "react";

function App() {
  const [reactModalIsOpen, setReactModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState("")

  const openReactModal = () => {
    setReactModalIsOpen(true);
  };

  const closeReactModal = () => {
    setReactModalIsOpen(false);
  };

  const changeModalMessage = (message) => {
    setModalText(message)
  }

  return (
    <div className={reactModalIsOpen? "appContainer disableScroll": "appContainer"}>
      <Modal
        reactModalIsOpen={reactModalIsOpen}
        closeReactModal={closeReactModal}
        modalText={modalText}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact openReactModal={openReactModal} changeModalMessage={changeModalMessage}/>} />
      </Routes>
    </div>
  );
}

export default App;
