import React from "react";
import Typewriter from "typewriter-effect";

// import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container d-grid" style={{ height: "100vh" }}>
      <div className="row ">
        <div className="col-sm-12 col-md-7 col-lg-7 mb-5 mb-md-0 mb-lg-0 p-3 d-flex align-items-center">
          <div>
            <h1 className="heading-name">
              <strong
                className="main-name"
                style={{ color: "rgb(13, 204, 150)" }}
              >
                Artificial intelligence
              </strong>
            </h1>
            <div className="h3 pb-3 " style={{ color: "rgb(13, 204, 150)" }}>
              <Typewriter
                options={{
                  strings: [
                    "AI, or Artificial Intelligence, is a field of computer science focused on creating systems that can perform tasks that typically require human intelligence. This includes tasks like learning, reasoning, problem-solving, and understanding natural language. AI systems use algorithms and data to make decisions and can improve their performance over time. They have a wide range of applications in various industries.",
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
          <img src="/Images/banner.gif" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Home;
