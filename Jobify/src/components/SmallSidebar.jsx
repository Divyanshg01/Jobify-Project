import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
function SmallSidebar() {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
            <div className="nav-links">
              {links.map((link) => {
                const { text, path, icon } = link;
                return (
                  <NavLink to={path} key={text} className="nav-links">
                    <span className="icon">{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
