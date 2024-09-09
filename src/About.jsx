import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <p>
        <span>hello world!</span>I’m Zahra, a software developer
        with a passion for problem-solving, a knack for
        producing innovative solutions, and a never-ending curiosity to keep
        expanding my knowledge. When I’m not busy crafting elegant code, you’ll
        find me hunched over a computer exploring the latest tech trends or
        tinkering with new tools. I’d love to connect with others who share the
        same enthusiasm for innovation so do <NavLink to="/contact">say hello</NavLink>
      </p>
    </div>
  );
};
