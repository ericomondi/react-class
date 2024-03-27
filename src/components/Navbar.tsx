import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <button className="navbar-brand" onClick={() => handleNavigation("/")}>
          Top navbar
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <button className="navbar-toggler-icon"></button>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={() => handleNavigation("/")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/todo")}
              >
                To-Do
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/about-us")}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/contact-us")}
              >
                Contact Us
              </button>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
