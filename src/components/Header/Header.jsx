import "./Header.scss";

const Header = () => {
  return (
    <div className="header-component">
      <div className="header-container-main">
        <div className="logo-container">
          <span className="logo-text">TONY LIM</span>
        </div>
        <div className="navigation-container">
          <span className="navigation-item">HOME</span>
          <span className="navigation-item">WORK</span>
          <span className="navigation-item">PROJECTS</span>
          <span className="navigation-item">TECHNOLOGY</span>
          <span class="navigation-item material-icons">email</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
