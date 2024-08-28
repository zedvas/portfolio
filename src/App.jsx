import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Nav } from "./Nav";
import "./css/app.css";
import { useState } from "react";
import ReactModal from "react-modal";

function App() {
  const [reactModalIsOpen, setReactModalIsOpen] = useState(false); 
  
  const openReactModal= () => {
    setReactModalIsOpen(true)
  }

  const closeReactModal= () => {
    setReactModalIsOpen(false)
  }
  
  ReactModal.setAppElement("#root");

  const modalStyle = {
    overlay: {height:"30px", width: "30px", margin:"auto"},
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
      backgroundColor: 'white',
      border: '2px solid rgb(240, 240, 240)',
      borderRadius: '12px',
      position: 'absolute',
      height: 'fit-content',
      width: '300px',
      top: '120px',
      left: 'calc(50% - 150px)'
    }
  }
  return (<div className="appContainer">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <button onClick={() => openReactModal()}>Open Modal</button>
      <ReactModal
        isOpen={reactModalIsOpen}
        onRequestClose={closeReactModal}
        style={modalStyle}
      >
        <button onClick={closeReactModal}>✖️ Close Modal</button>
      </ReactModal>
</div>  );
}

export default App;
