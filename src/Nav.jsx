import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Title } from "./Title";

export const Nav = () => {
  return (
    <div className="nav">         
      <ul>
        <NavLink to="/">
          <li>home</li>
        </NavLink>
        <NavLink to="/projects">
          <li>projects</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="cta">let's chat</li>
        </NavLink>
      </ul>
      <div className="socialsContainer">
        <a target="_blank" href="https://www.linkedin.com/in/zahravasanji/"><LinkedInIcon/></a>
        <a target="_blank" href="https://github.com/zedvas"><GitHubIcon/></a>
      </div>
    </div>
  );
};
