

import React, { useEffect, useState } from "react";
import Logo from "../assets/200.gif";
import { FaTimes  } from "react-icons/fa";
import { HiArrowSmUp, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsGridFill } from "react-icons/bs";
import { Modal, Button, Form } from 'react-bootstrap';
import { auth } from '../Firebase'; // Import your Firebase configuration

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [showShadowNav, setShowShadowNav] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Track if the modal is open
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setShowLoginModal(false);
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setShowSignupModal(false);
    } catch (error) {
      console.error('Signup Error:', error.message);
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
    className={`navbar navbar-expand-md navbar-light bg-white text-black ${showShadowNav ? 'shadow' : ''}`}

    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" style={{ height:' 60px' ,width: "60px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleClick}
        >
          {!nav ? <BsGridFill /> : <FaTimes />}
        </button>

        <div
          className={
            nav
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav  ml-auto"  > 
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
            <button onClick={() => setShowLoginModal(true)} className="nav-link  ">
        Login
      </button>
      <button onClick={() => setShowSignupModal(true)} className="nav-link  ">
        Signup
      </button>

          </ul>
       
 
      <Modal
        show={showLoginModal || showSignupModal}
        onHide={() => setShowLoginModal(false) || setShowSignupModal(false)}
        dialogClassName="custom-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{showLoginModal ? 'Login' : 'Signup'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false) || setShowSignupModal(false)}>
            Close
          </Button>
          {showLoginModal ? (
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSignup}>
              Signup
            </Button>
          )}
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      {backToTop && (
        <div className="fixed-bottom ml-auto mb-3">
          <button
            onClick={scrollUp}
            className="btn btn-light rounded-circle"
          >
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}



 
 
    </nav>
  );
};

export default Navbar;












// import React, { useEffect, useState } from "react";
// import Logo from "../assets/200.gif";
// import { FaTimes  } from "react-icons/fa";
// import { HiArrowSmUp, HiMail } from "react-icons/hi";
// import { Link } from "react-scroll";
// import { BsGridFill } from "react-icons/bs";


// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [backToTop, setBackToTop] = useState(false);
//   const [showShadowNav, setShowShadowNav] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setBackToTop(true);
//         setShowShadowNav(true);
//       } else {
//         setBackToTop(false);
//         setShowShadowNav(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const handleClick = () => {
//     setNav(!nav);
//     setBackToTop(false);
//   };

//   return (
//     <nav
//     className={`navbar navbar-expand-md navbar-light bg-white text-black ${showShadowNav ? 'shadow' : ''}`}

//     >
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           <img src={Logo} alt="logo" style={{ height:' 60px' ,width: "60px" }} />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={handleClick}
//         >
//           {!nav ? <BsGridFill /> : <FaTimes />}
//         </button>

//         <div
//           className={
//             nav
//               ? "collapse navbar-collapse show"
//               : "collapse navbar-collapse"
//           }
//         >
//           <ul className="navbar-nav  ml-auto" style={{marginLeft:"65%"}}> 
//             <li className="nav-item">
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="skill"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 Features
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="experience"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 Contact
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link
//                 to="work"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link"
//                 onClick={handleClick}
//               >
//                 Signup
//               </Link>
//             </li>

  
//           </ul>
//         </div>
//       </div>
//       {backToTop && (
//         <div className="fixed-bottom ml-auto mb-3">
//           <button
//             onClick={scrollUp}
//             className="btn btn-light rounded-circle"
//           >
//             <HiArrowSmUp size={20} />
//           </button>
//         </div>
//       )}

   
//     </nav>
//   );
// };

// export default Navbar;
