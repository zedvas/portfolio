import { NavLink } from "react-router-dom";
import { Title } from "./Title";
import { About } from "./About";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Title />
      <About />
      <Projects />
    </div>
  );
};
