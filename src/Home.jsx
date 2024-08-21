import { NavLink } from "react-router-dom";
import { Title } from "./Title";
import { About } from "./About";
import { Icons } from "./Icons";

export const Home = () => {
  return (
    <div className="home">
      <Title />
      <About />
      <Icons />
    </div>
  );
};
