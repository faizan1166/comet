import "./navbar.css";
import "../App.css";
import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useCallback } from "react";

export default function Navbar() {
  let [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams?.get("referer")) {
      sessionStorage.setItem(
        "referer",
        searchParams.get("referer").toLowerCase()
      );
    }
  }, [searchParams]);

  const documentScroll = useCallback((event) => {
    event.preventDefault();
    let header = document.querySelector(".topnav");
    let collapsehide = document.querySelector(".collapsehide");

    if (window.scrollY > 50) {
      header?.classList.add("custom-bg");
      collapsehide?.classList.remove("show");
    } else {
      header?.classList.remove("custom-bg");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", documentScroll);
    return () => {
      document.removeEventListener("scroll", documentScroll);
    };
  }, [documentScroll]);

  return (
    <div>
      <nav
        className={
          "topnav navbar navbar-expand-md shadow justify-content-between justify-content-sm-start navbar-light"
        }
        id="sidenavAccordion"
      >
        <div className="container-fluid">
          <div className="navbar-brand d-flex justify-content-between ">
            <NavLink to="/">
              <img
                src="images/white-logo.png"
                alt="Logo"
                className="logoImage"
              />
            </NavLink>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ marginRight: 20 }}
            >
              <span className="navbar-toggler-icon navbar-dark"></span>
            </button>
          </div>

          <div
            className="collapsehide collapse navbar-collapse"
            id="navbarTogglerDemo01"
            style={{ marginRight: 20 }}
          >
            <ul className="navbar-nav align-items-center ml-auto col-auto px-4">
              <li className="nav-item   me-3  ">
                <NavLink className="nav-link" to="/">
                  <div className=" fw-bold text-white fs-6">Home</div>
                </NavLink>
              </li>
              <li className="nav-item   me-3  ">
                <NavLink className="nav-link" to="/pricing">
                  <div className=" fw-bold text-white fs-6">Pricing</div>
                </NavLink>
              </li>
              <li className="nav-item   me-3  ">
                <NavLink className="nav-link" to="/faq">
                  <div className=" fw-bold text-white fs-6">FAQ</div>
                </NavLink>
              </li>
              <li className="nav-item   me-3  ">
                <NavLink className="nav-link" to="/Signup">
                  <div className=" fw-bold text-white fs-6">Sign up!</div>
                </NavLink>
              </li>
              <li className="nav-item   me-4  ">
                <a
                  className="nav-link"
                  href={`${process.env.REACT_APP_LOGIN_URL}`}
                >
                  <div className=" fw-bold text-white fs-6">Log In</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
