import { Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Nav } from "./Nav";
import "./css/app2.css";

function App() {
  return (<div className="appContainer">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
</div>  );
}

export default App;
