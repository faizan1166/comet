import React from "react";
import features from "../assets/features.mp4";
import { Icon } from "@iconify/react";

function Features() {
  const cardData = [
    {
      icon: (
        // <Icon icon="iconoir:learning" fontSize={40} color="rgb(13, 204, 150)" />
        <img
          src="Images/learning.gif"
          style={{ height: "50px", width: "50px" }}
        />
      ),
      title: " Learning and Adaptation",
      desc: "  AI systems can learn from data and experiences, improving their performance over time.",
    },
    {
      icon: (
        <img
          src="Images/problem.gif"
          style={{ height: "50px", width: "50px" }}
        />
      ),
      title: "Problem Solving and Reasoning",
      desc: " AI uses logical reasoning and algorithms to solve complex problems and make decisions.",
    },
    {
      icon: (
        <img
          src="Images/natural.gif"
          style={{ height: "50px", width: "50px" }}
        />
      ),
      title: "Natural Language Processing (NLP)",
      desc: "AI understands and generates human language, enabling communication with machines through speech or text.",
    },
    {
      icon: (
        // <Icon
        //   icon="carbon:ibm-cloud-pak-business-automation"
        //   color="rgb(13, 204, 150)"
        //   fontSize={40}
        // />
        <img src="Images/robot.gif" style={{ height: "50px", width: "50px" }} />
      ),
      title: "Automation and Autonomy",
      desc: "AI performs tasks independently, such as autonomous driving and industrial automation.",
    },
    {
      icon: (
        <img
          src="Images/pattern.gif"
          style={{ height: "50px", width: "50px" }}
        />
      ),
      title: "Pattern Recognition and Prediction",
      desc: "AI identifies patterns in data to make predictions or recommendations, aiding fields like finance and healthcare.",
    },
    {
      icon: (
        <img src="Images/AI.gif" style={{ height: "50px", width: "50px" }} />
      ),
      title: "Computer Vision",
      desc: "AI interprets visual information, allowing tasks like image recognition and object detection.",
    },
  ];
  return (
    <>
      <div className="container my-5 py-4">
        <h1 className="pb-4 text-center" style={{ color: "rgb(13, 204, 150)" }}>
          Features of AI
        </h1>
        <div className="row g-5">
          {cardData.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-stretch">
                <div className="card rounded-5 border-0 shadow-sm p-3">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle p-3"
                      style={{
                        backgroundColor: "rgb(55 164 198 / 10%)",
                        // height: "300px",
                        // width: "300px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="ms-3">
                      <h3 style={{ color: "rgb(13, 204, 150)" }}>
                        {item.title}
                      </h3>
                      <p className="text-muted">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Features;
