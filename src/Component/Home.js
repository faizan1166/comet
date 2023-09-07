import React from "react";
import Typewriter from "typewriter-effect";
import space from "../assets/features.mp4";

// import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source src={space} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>

      <div className="overlay">
        <div className="container d-grid" style={{ height: "100vh" }}>
          <div className="row ">
            <div className="col-sm-12 col-md-7 col-lg-7 mb-5 mb-md-0 mb-lg-0 p-3 d-flex align-items-center">
              <div>
                <h1 className="heading-name mb-4">
                  <strong className="main-name" style={{ color: "#fff" }}>
                    What is Artificial intelligence?
                  </strong>
                </h1>
                <div
                  className="h3 pb-3 "
                  style={{ color: "rgb(13, 204, 150)" }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "AI, or Artificial Intelligence, is a field of computer science focused on creating systems that can perform tasks that typically require human intelligence.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                {/* <div>
              <Link id="contact" to="/contact" className="border-0 p-2">
                Contact Us
              </Link>
            </div> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center home-img">
              <img src="/Images/faceman.gif" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
