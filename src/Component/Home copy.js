import "../App.css";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";
import QuoteCards from "./QuoteCards";
import { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerWidth;
      setWidth(newHeight);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });
  console.log(width);

  const containerStyle = {
    backgroundImage: 'url("/images/wr-pricing-header.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: width > 769 && "rotate(-1.5deg)",
    position: "relative",
    width: width > 769 ? "99.5%" : "100%",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(3 48 73 / 84%)",
  };

  const data = [
    {
      title: "30,000",
      desc: "Lines of Custom Code",
      icon: (
        <Icon
          icon="mingcute:code-fill"
          style={{ fontSize: 70, color: "#008e00" }}
        />
      ),
    },
    {
      title: "25,000",
      desc: "Email Reminders Sent",
      icon: (
        <Icon
          icon="mdi:email-fast-outline"
          style={{ fontSize: 70, color: "#008e00" }}
        />
      ),
    },
    {
      title: "50",
      desc: "Feature Updates Since Launch",
      icon: (
        <Icon
          icon="ic:outline-tips-and-updates"
          style={{ fontSize: 70, color: "#008e00" }}
        />
      ),
    },
    {
      title: "5",
      desc: "Minutes to Accept Payments",
      icon: (
        <Icon
          icon="streamline:interface-time-stop-watch-third-quarter-quarters-time-measure-stopwatch-three-seconds-minutes"
          style={{ fontSize: 70, color: "#008e00" }}
        />
      ),
    },
  ];
  return (
    <div style={{ backgroundColor: "#e7edf3" }}>
      <header>
        <div
          className="custom-overlay"
          style={{
            backgroundImage: `url(${"./images/YLL_Landscape-Only.png"})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3 text-white">
                <img
                  className="custom-img"
                  src="images/white-logo.png"
                  alt="Logo"
                />
              </h1>
              <p className="text-white fs-1 ">Notes Made Easy</p>
              <NavLink
                className="btn btn-success lead mb-0 fs-3 px-5 fw-bold"
                to="Signup"
              >
                Get Started!
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            backgroundImage: `url(${"./images/background.jpg"})`,

            backgroundSize: "cover",
            color: "#fff",
            // textAlign: "center",
            // paddingTop: "15vh",
            // lineHeight: "0.9",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            boxShadow: "rgb(255 255 255 / 45%) 0px 0px 0px 20000px inset",
            marginBottom: "-70px",
          }}
        >
          <div className="container">
            <div className="row gx-5 py-5 pb-5">
              <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
                <img
                  src="/images/6268777.png"
                  className="img-fluid "
                  data-aos="fade-up"
                />
              </div>
              <div
                className="col-sm-12 col-md-8 col-lg-8"
                data-aos="fade-up-left"
              >
                <h1
                  className=" text-success primary-green mb-3 pt-5"
                  style={{ fontSize: " 6vh" }}
                >
                  Notes on Easy Mode
                </h1>
                <p className="content  pt-3 fs-4 pb-5">
                  <i className="text-muted">
                    If you're looking for more time and less distractions from
                    what really matters then we're here to help. While manually
                    collecting payments, updating statements, sending out
                    follow-up emails and creating payoffs excites some people...
                    we're pretty sure you don't want to. That's where we come
                    in. We automate away 95% of the nonsense and make managing
                    your note portfolio as easy as possible.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={containerStyle}>
          <div style={overlayStyle}></div>
          <div
            className="container"
            style={{ transform: width > 769 && "rotate(1.5deg)" }}
          >
            <div className="row py-5 mt-5">
              <div
                class="firstcol  col-md-6 col-lg-6  col-sm-12 d-flex align-items-center"
                style={{ zIndex: 1 }}
              >
                <div>
                  <h1
                    class="text-left"
                    style={{ fontSize: "6vh", color: "rgb(255, 255, 255)" }}
                  >
                    Effortless Setup
                  </h1>
                  <p
                    class="content text-left pt-3 fs-4"
                    style={{ color: "rgba(255, 255, 255, 0.85" }}
                  >
                    Get more time for what matters most. We're here to help. Say
                    goodbye to manual payment collection, statement updates,
                    follow-up emails, and payoffs. Our solution removes 95% of
                    the hassle, making note portfolio management a breeze.{" "}
                  </p>
                </div>
              </div>

              <div className="Secondcol  col-md-6 col-lg-6  col-sm-12 ">
                <div class="row gx-3">
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div
                      class="card rounded-3 my-2 border-0"
                      style={{
                        width: "100%",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      <div
                        class="card-body rounded-3"
                        style={{ backgroundColor: "#3f6b81ab" }}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            className="img-fluid wow shake me-3"
                            data-wow-iteration="4"
                            data-wow-duration="2s"
                            src="images/check.svg"
                            style={{ maxWidth: "70px" }}
                            alt=""
                          />
                        </div>
                        <h3 className="card-title my-3 text-center">
                          SIMPLIFY
                        </h3>
                        <p className="fs-5 m-0">
                          We want Note management to be one of the easiest parts
                          of your business
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div
                      class="card rounded-3 my-2"
                      style={{
                        width: "100%",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      <div
                        class="card-body rounded-3 border-0"
                        style={{ backgroundColor: "#3f6b81ab" }}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            className="img-fluid wow shake me-3"
                            data-wow-iteration="4"
                            data-wow-duration="2s"
                            src="images/gear.svg"
                            style={{ maxWidth: "70px" }}
                            alt=""
                          />
                        </div>
                        <h3 className="card-title my-3 text-center">
                          AUTOMATE
                        </h3>
                        <p className="fs-5 m-0">
                          Collect Payments, Generate Payoffs, Add Late Fees and
                          more all without lifting a finger
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-3">
                  <div class="col-md-6 d-flex align-items-stretch ">
                    <div
                      class="card rounded-3 my-2 border-0"
                      style={{
                        width: "100%",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      <div
                        class="card-body rounded-3 border-0"
                        style={{ backgroundColor: "#3f6b81ab" }}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            className="img-fluid wow shake me-3"
                            data-wow-iteration="4"
                            data-wow-duration="2s"
                            src="images/graph.svg"
                            style={{ maxWidth: "70px" }}
                            alt=""
                          />
                        </div>
                        <h3 className="card-title my-3 text-center">DATA</h3>
                        <p className="fs-5 m-0">
                          Wield a robust set of analytic around your notes
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-stretch">
                    <div
                      class="card rounded-3 my-2"
                      style={{
                        width: "100%",
                        color: "white",
                        background: "transparent",
                      }}
                    >
                      <div
                        class="card-body rounded-3"
                        style={{ backgroundColor: "#3f6b81ab" }}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            className="img-fluid wow shake me-3"
                            data-wow-iteration="4"
                            data-wow-duration="2s"
                            src="images/fast-click.svg"
                            style={{ maxWidth: "70px" }}
                            alt=""
                          />
                        </div>
                        <h3 className="card-title my-3 text-center">FAST!</h3>
                        <p className="fs-5 m-0 ">
                          {" "}
                          Lenders can be ready to accept ACH Payments in under
                          10 minutes. Borrowers can be ready to pay in under 5!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${"./images/12140.jpeg"})`,

            backgroundSize: "cover",
            color: "#fff",
            textAlign: "center",
            paddingTop: "15vh",
            lineHeight: "0.9",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            boxShadow: "rgb(255 255 255 / 45%) 0px 0px 0px 20000px inset",
            marginTop: "-20px",
          }}
        >
          <div className="container pb-5 custom-overlay">
            <h1
              className=" text-success primary-green text-center pb-5 my-3"
              style={{ fontSize: " 6vh" }}
            >
              Features
            </h1>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4 ">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front bg-white  p-5 px-sm-4 px-4 px-md-4 rounded-3">
                      <Icon
                        icon="bytesize:creditcard"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">
                        Automated Partner/Team Payments feature
                      </h2>
                      <p className="text-muted my-4 fs-5">
                        Payment using credit card for purchases
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center ">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>Credit Card Payment</h1> */}
                        <p>
                          Automatically send a portion of each payment directly
                          to your Partner, Lender, or Team Member
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front bg-white  p-4 px-sm-4 px-4 px-md-4  rounded-3">
                      <Icon
                        icon="mdi:book-multiple"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">Multiple Loans per Borrower</h2>
                      <p className="text-muted my-4 fs-5 lh-sm">
                        Repeat Buyer? No Sweat. Borrowers manage all their loans
                        from one login
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>Multiple Loans per Borrower</h1> */}
                        <p>
                          Our platform allows borrowers to manage multiple loans
                          effortlessly, providing flexibility and control over
                          their financial needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front p-5 bg-white px-sm-4 px-4 px-md-4 rounded-3">
                      <Icon
                        icon="fa6-brands:amazon-pay"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">One-Click Payoff</h2>
                      <p className="text-muted my-4 fs-5 lh-sm">
                        Everyone can generate estimated payoff numbers in just
                        one click
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>One-Click Payoff</h1> */}
                        <p>
                          Say goodbye to complex payment processes. With our
                          one-click payoff feature, settling your loans is quick
                          and hassle-free.
                        </p>
                      </div>
                      {/* <a href="#" className="fs-5">
                    Read more <Icon icon="ooui:arrow-next-ltr" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front bg-white p-5 px-sm-4 px-4 px-md-4 rounded-3">
                      <Icon
                        icon="mingcute:transfer-fill"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">Loans Transfer</h2>
                      <p className="text-muted my-4 fs-5">
                        Easily Transfer Loans to another Lender
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>Loans Transfer</h1> */}
                        <p>
                          Transfer loans smoothly between accounts or borrowers
                          when needed, ensuring flexibility in your financial
                          transactions.
                        </p>
                      </div>
                      {/* <a href="#" className="fs-5">
                    Read more <Icon icon="ooui:arrow-next-ltr" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front p-5 bg-white px-sm-4 px-4 px-md-4 rounded-3">
                      <Icon
                        icon="mdi:bank"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">Multiple Account Creation</h2>
                      <p className="text-muted my-4 fs-5 lh-sm">
                        Team Members, Partners or Lenders can create accounts
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>Multiple Account Creation</h1> */}
                        <p>
                          Whether you're a Team Member, Partner, Lender, or
                          Borrower, our platform caters to your specific needs
                          with customizable account types.
                        </p>
                      </div>
                      {/* <a href="#" className="fs-5">
                    Read more <Icon icon="ooui:arrow-next-ltr" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div class="flip-card mt-4">
                  <div class="flip-card-inner shadow-sm border-0 rounded-3">
                    <div class="flip-card-front bg-white  p-5 px-sm-4 px-4 px-md-4 rounded-3">
                      <Icon
                        icon="mdi:users"
                        fontSize={55}
                        style={{ color: "#008e00" }}
                        className="mb-4"
                      />

                      <h2 className="fs-3">Multiple Borrowers per Loans</h2>
                      <p className="text-muted my-4 fs-5 lh-sm">
                        Add upto 5 borrowers to a loan
                      </p>
                    </div>
                    <div class="flip-card-back p-5 px-sm-4 px-4 px-md-4 rounded-3 d-flex align-items-center">
                      <div className="text-center fs-4 lh-sm">
                        {/* <h1>Multiple Borrowers per Loans</h1> */}
                        <p>
                          Collaborate with co-borrowers seamlessly, making it
                          easier than ever to secure loans and share
                          responsibilities.
                        </p>
                      </div>
                      {/* <a href="#" className="fs-5">
                    Read more <Icon icon="ooui:arrow-next-ltr" />
                  </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, #008e00 50%)",
            }}
          >
            <div className="container pt-5" style={{ maxWidth: " 90%" }}>
              <div className="row m-auto pt-3">
                <div className="col-xxl-12 col-xl-12 mb-4">
                  <div className="card shadow border-0">
                    <div className="card-body d-flex flex-column justify-content-center py-5 py-xl-4">
                      <div className="row align-items-center">
                        {data.map((_) => {
                          return (
                            <div className="col-sm-12 col-md-6 col-lg-3 wow bounceInUp">
                              <div className="card shadow-none border-0">
                                <div className="card-body text-muted fs-5 text-center">
                                  <h3 className="card-title">{_.icon}</h3>
                                  <h1>{_.title}</h1>
                                  <p>{_.desc}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4" style={{ backgroundColor: " #008e00" }}>
          <div className="container">
            <div className="my-5">
              <h1
                className=" text-center"
                style={{ fontSize: " 6vh", color: "#fff" }}
              >
                How it Works
              </h1>
              {/* <p className="text-center mt-4">
            We Provide online instant cash loan with quick approval that suit
            your term
          </p> */}
            </div>

            <div className="row my-5">
              <div className="col-md-4 col-sm-12 col-lg-4">
                <div
                  className="card border-0 shadow-none"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-body text-muted fs-5 ">
                    <div
                      className=" bg-white border-0 my-2 d-flex align-items-center justify-content-center"
                      style={{
                        height: "70px",

                        width: "70px",
                        borderRadius: "50%",
                      }}
                    >
                      <h3 className="card-title">
                        <Icon
                          icon="fa6-solid:1"
                          style={{ fontSize: 25, color: "#008e00" }}
                        />
                      </h3>
                    </div>
                    <h3 style={{ color: "#fff" }}>Create an Account</h3>
                    <p style={{ color: "#fff" }}>
                      Begin your journey by signing up for an account. It's
                      quick and easy - just provide some basic information, and
                      you'll be on your way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4">
                <div
                  className="card border-0 shadow-none"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-body text-muted fs-5 ">
                    <div
                      className=" bg-white border-0 my-2 d-flex align-items-center justify-content-center"
                      style={{
                        height: "70px",

                        width: "70px",
                        borderRadius: "50%",
                      }}
                    >
                      <h3 className="card-title">
                        <Icon
                          icon="fa6-solid:2"
                          style={{ fontSize: 25, color: "#008e00" }}
                        />
                      </h3>
                    </div>
                    <h3 style={{ color: "#fff" }}>Check Your Email</h3>
                    <p style={{ color: "#fff" }}>
                      After creating an account, keep an eye on your inbox.
                      We'll send you an email with a temporary password. Now you
                      can reset your password for added security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4">
                <div
                  className="card border-0 shadow-none"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-body text-muted fs-5 ">
                    <div
                      className=" bg-white border-0 my-2 d-flex align-items-center justify-content-center"
                      style={{
                        height: "70px",

                        width: "70px",
                        borderRadius: "50%",
                      }}
                    >
                      <h3 className="card-title">
                        <Icon
                          icon="fa6-solid:3"
                          style={{ fontSize: 25, color: "#008e00" }}
                        />
                      </h3>
                    </div>
                    <h3 style={{ color: "#fff" }}>Login</h3>
                    <p style={{ color: "#fff" }}>
                      Once you've reset your password, use your registered email
                      address and the current password to log in. From there,
                      you can personalize your account and start exploring all
                      that our platform has to offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${"./images/background.jpg"})`,

            backgroundSize: "cover",
            color: "#fff",
            // textAlign: "center",
            // paddingTop: "15vh",
            // lineHeight: "0.9",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            boxShadow: "rgb(255 255 255 / 45%) 0px 0px 0px 20000px inset",
            // marginBottom: "-70px",
          }}
        >
          <div className="container py-5">
            <div
              className="row py-5"
              style={{
                backgroundImage: "white-logo.png",
              }}
            >
              <div
                className="col-sm-12 col-md-7 col-lg-7"
                data-aos="fade-up-right"
              >
                <h1
                  className=" text-success mb-4 "
                  style={{ fontSize: " 6vh" }}
                >
                  OUR JOURNEY
                </h1>
                <p className="content fs-4 pt-3 text-muted fst-italic pt-3 fs-4 pb-5">
                  Being a small real estate lender can be tough. After searching
                  and searching for a solution for our own portfolios we just
                  couldn't find a loan servicing platform that was both
                  affordable and high quality. Self servicing Non-Owner-Occupied
                  real estate loans puts us in a unique space. The existing
                  platforms are largely made for huge servicing companies and
                  charge huge fees or didn't meet our quality standards for
                  accuracy and ease of use. Thus Your Land Loans was born! We
                  want to give you a best-in-class experience you don't have to
                  break the proverbial piggy bank for.
                </p>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 d-flex align-items-center">
                <img
                  src="/images/4343585.png"
                  className="img-fluid"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
        <QuoteCards />
        <div className="card-body  d-flex flex-column justify-content-center py-xl-4 ">
          <div className=" mt-5 ">
            <h1
              className="text-center text-success primary-green"
              style={{ fontSize: " 6vh" }}
            >
              Where you can find us online
            </h1>
          </div>
          <div className="container">
            <div className="row  justify-content-center g-3 my-5 g-5">
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div
                  className="shadow-sm rounded overflow-hidden bg-white"
                  style={{
                    height: "45vh",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/U35kvIClO9I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div
                  className="shadow-sm rounded overflow-hidden bg-white"
                  style={{
                    height: "45vh",
                  }}
                >
                  <a href="https://casualfridaysrei.com/episode-421-your-land-loans-with-jt-olmstead/">
                    <span className="et_pb_image_wrap ">
                      <img
                        decoding="async"
                        loading="lazy"
                        width="100%"
                        height="100%"
                        src="https://olmstead.properties/wp-content/uploads/2023/07/1.png"
                        alt=""
                        srcset="https://olmstead.properties/wp-content/uploads/2023/07/1.png 800w, https://olmstead.properties/wp-content/uploads/2023/07/1-480x300.png 480w"
                        sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
                        className="wp-image-7464"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div
                  className="shadow-sm rounded overflow-hidden bg-white"
                  style={{
                    height: "45vh",
                  }}
                >
                  <a href="https://www.landmavericks.com/podcast/013">
                    <span className="et_pb_image_wrap ">
                      <img
                        decoding="async"
                        loading="lazy"
                        width="100%"
                        height="100%"
                        src="https://olmstead.properties/wp-content/uploads/2023/07/2.png"
                        alt=""
                        srcset="https://olmstead.properties/wp-content/uploads/2023/07/2.png 800w, https://olmstead.properties/wp-content/uploads/2023/07/2-480x300.png 480w"
                        sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw"
                        className="wp-image-7465"
                      />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 ">
                <div
                  className="shadow-sm rounded overflow-hidden bg-white"
                  style={{
                    height: "45vh",
                  }}
                >
                  <iframe
                    style={{
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/ez0_IzmeuAs"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
