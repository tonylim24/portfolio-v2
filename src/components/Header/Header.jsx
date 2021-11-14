import "./Header.scss";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import { Email, Menu } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header-component">
      <div className="header-component-container">
        <div className="header-logo-banner">
          <div className="language-group">
            <LocationOnIcon />
            <p>Vancouver, B.C., Canada</p>
          </div>

          <h1 id="header-tl-text">TONY LIM</h1>

          <div className="banner-right-icons">
            <SearchIcon className="mui-icon" />
            <Email className="mui-icon" />
          </div>
        </div>
        <nav className="header-navigation-list">
          <p className="navigation-content">PROJECTS</p>
          <p className="navigation-content">WORK</p>
          <p className="navigation-content">TECHNOLOGY</p>
          <p className="navigation-content">CONTACT</p>
        </nav>
        <div className="header-navigation-menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
