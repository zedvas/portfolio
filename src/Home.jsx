import { NavLink } from "react-router-dom";
import { Title } from "./Title";
import { About } from "./About";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Title />
      <About />
    </div>
  );
};
