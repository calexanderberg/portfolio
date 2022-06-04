import { Link } from "react-router-dom";

const MainNavView = () => {
  return (
    <div className="navbar">
      <div className="navbar_Links">
        <Link to="/" className="logo">
          C. Alexander Berg
        </Link>
        <div className="navbar_Links_Right">
          <Link to="/about" className="navbar_Links_Right_Link">
            About
          </Link>
          <Link to="/story" className="navbar_Links_Right_Link">
            Story
          </Link>
          <Link to="/work" className="navbar_Links_Right_Link">
            Work
          </Link>
          <Link to="/contact" className="navbar_Links_Right_Link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavView;
