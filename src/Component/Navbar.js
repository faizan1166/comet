import React, { useEffect, useState } from "react";
import Logo from "../assets/200.gif";
import { FaTimes } from "react-icons/fa";
import { HiArrowSmUp, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsGridFill } from "react-icons/bs";
import { Modal, Button, Form } from "react-bootstrap";
import { auth } from "../Firebase"; // Import your Firebase configuration
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [showShadowNav, setShowShadowNav] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Track if the modal is open
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLoginModal(false);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSignupModal(false);
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
        setShowShadowNav(true);
      } else {
        setBackToTop(false);
        setShowShadowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setNav(!nav);
    setBackToTop(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-md navbar-light bg-white text-black ${
        showShadowNav ? "shadow" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="logo"
            style={{ height: " 60px", width: "60px" }}
          />
        </a>

        <button className="navbar-toggler" type="button" onClick={handleClick}>
          {!nav ? <BsGridFill /> : <FaTimes />}
        </button>

        <div
          className={
            nav ? "collapse navbar-collapse show" : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="skill"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleClick}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleClick}
              >
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
            <button
              onClick={() => {
                setToggleModal(true);
                setSignUpModal(false);
              }}
              className="nav-link  "
            >
              Login
            </button>
          </ul>

          <Modal
            show={toggleModal}
            onHide={() => setToggleModal(false)}
            dialogClassName="custom-modal"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "rgb(13, 204, 150)" }}>
                {signUpModal ? "Sign Up" : "Login"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                {signUpModal ? (
                  <Form.Group controlId="formBasicPassword" className="ms-1">
                    Have Not Account Yet?{" "}
                    <a
                      style={{ cursor: "pointer", color: "rgb(13, 204, 150)" }}
                      onClick={() => setSignUpModal(!signUpModal)}
                    >
                      Sign Up
                    </a>
                  </Form.Group>
                ) : (
                  <Form.Group controlId="formBasicPassword" className="ms-1">
                    Already Registred?{" "}
                    <a
                      style={{ cursor: "pointer", color: "rgb(13, 204, 150)" }}
                      onClick={() => setSignUpModal(!signUpModal)}
                    >
                      Login
                    </a>
                  </Form.Group>
                )}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {signUpModal ? (
                <Button
                  className="border-0"
                  style={{ backgroundColor: "rgb(13, 204, 150)" }}
                  onClick={handleSignup}
                >
                  Signup
                </Button>
              ) : (
                <Button
                  className="border-0"
                  style={{ backgroundColor: "rgb(13, 204, 150)" }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {backToTop && (
        <div className="fixed-bottom ml-auto mb-3">
          <button onClick={scrollUp} className="btn btn-light rounded-circle">
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
