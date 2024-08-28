import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Nav } from "./Nav";
import "./css/app.css";
import { Modal } from "./Modal";
import { useState } from "react";

function App() {
  const [reactModalIsOpen, setReactModalIsOpen] = useState(true);

  const openReactModal = () => {
    setReactModalIsOpen(true);
  };

  const closeReactModal = () => {
    setReactModalIsOpen(false);
  };
  return (
    <div className={reactModalIsOpen? "appContainer disableScroll": "appContainer"}>
      <Modal
        reactModalIsOpen={reactModalIsOpen}
        closeReactModal={closeReactModal}
      />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact openReactModal={openReactModal}/>} />
      </Routes>
    </div>
  );
}

export default App;
