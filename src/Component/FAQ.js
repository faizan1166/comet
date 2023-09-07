import { useState } from "react";
import "../App.css";
export default function FAQ() {
  const [questionsArray] = useState([
    {
      questionTitle: "Who Should use this Application?",
      answer:
        "If you love doing tedious paperwork and continually answering the same question, this app is not for you. If, however, you enjoy free time and automation that enables you to do more important things then this is going be right up your alley. This application is made to support land investors who create or purchase owner finance notes for Non-Owner-Occupied land.",
    },
    {
      questionTitle: "Can I try it out before I buy it?",
      answer:
        "Absolutely! Feel free to set up a note on our " +
        '"Free!"' +
        " plan and check everything out. We won't charge you a dime (or even require a Credit Card!) for the account. The only charge you may see would be to cover the charge of any payments your borrowers make on the account.",
    },
    {
      questionTitle: "Is it safe?",
      answer:
        "Absolutely. We use best-in-class industry practices when it comes to security. This includes limiting the amount of data we collect and encrypting your data both at rest and in transit.",
    },
    {
      questionTitle: "How much does it cost?",
      answer: [
        `You can see a breakdown of the plans we offer on our `,
        <a className="custom-Link" href="/pricing" key="pricing">
          Pricing Page
        </a>,
      ],
    },
    {
      questionTitle: "How do I get started?",
      answer: [
        `Hop over to our `,
        <a className="custom-Link" href="Signup" key="Signup">
          Sign up
        </a>,
        ` page and create an account!`,
      ],
    },
    {
      questionTitle: "I ran into an issue, now what?",
      answer:
        "If you feel like there is an issue with the site, reach out to us at Support@YourLandLoans.com.",
    },
    {
      questionTitle: "What If I want to cancel my account?",
      answer:
        "No worries! We understand that we're not going to be a perfect fit for everyone. Simply go into your account settings and set your account back to Free. When your current subscription ends your account will have one active loan and the rest of the loans will be put into a Read-Only status and all communication with your borrowers will cease.",
    },
    {
      questionTitle: "Can I use Your Land Loans anywhere in the US?",
      answer:
        "Of course! Your Land Loans is ready to support your loan servicing efforts anywhere in the US. Locals laws and regulations do vary however so be sure to familarize yourself and stay compliant!",
    },
    {
      questionTitle:
        "Is Your Land Loans a full service loan servicing company?",
      answer:
        "No. Your Land Loans is a software platform that provides you many of the tools necessary to self service your own loans. We do not service any of the loans on your behalf.",
    },
    {
      questionTitle: "How many loans can I have on my account?",
      answer: `The number of loans you can have on your account is determined by the plan you have chosen. There is no max number of loans on our "Full Tilt" plan.`,
    },
    {
      questionTitle: "Can my borrowers contact you for support?",
      answer:
        "No. Support is only provided to customers (Lenders). Any contact we receive from a borrower will be referred to the lender for support.",
    },
    {
      questionTitle: "Is there a limit to the size of my borrowers payment?",
      answer:
        "When a borrower makes a payment via ACH there is a limit of $10,000.",
    },
    {
      questionTitle: "Can you support overseas lenders?",
      answer:
        "The short answer is probably not. Due to limitations in place with our ACH processing vendor we are unable to fully support overseas lenders on the platform as they require a physical US location as part of their underwriting. This cannot be a virtual mail box, virtual office, or registered agent. It has to be a physical work location located in the US. If believe you might be able to meet these requirements you are of course welcome to signup and begin the process!",
    },
  ]);

  return (
    <div style={{ background: "rgb(231, 237, 243)" }}>
      <div className="position-relative overflow-hidden W-100">
        <div
          style={{
            backgroundImage: `url(${"./images/wr-faq-header.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "67vh",
          }}
        >
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3 text-white">
                  FREQUENTLY ASKED QUESTIONS
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row column medium-10 large-8 xxlarge-6 customPaddingfaq">
          {questionsArray.map((item, index) => (
            <div className="col-md-12 mt-4">
              <div className="card custom-card shadow-md border-0 rounded-3 card-body fs-5">
                <div className="accordion" id={`accordionExample${index}`}>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header" id={`headingOne${index}`}>
                      <button
                        className="accordion-button collapsed fs-5"
                        style={{ boxShadow: "none" }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${index}`}
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="d-inline m-2">
                          <b className="">Q : </b> {item.questionTitle}
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapseOne${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`headingOne${index}`}
                      data-bs-parent={`#accordionExample${index}`}
                    >
                      <div className="accordion-body fs-5">
                        <b className="m-2">A : </b> {item.answer}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
