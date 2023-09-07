import { QuestionIcon, CheckIcon } from "@primer/octicons-react";
import { useCallback, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";
import swipeLeft from "../Image/swipeLeft.svg";
import { useIntersection } from "./utils/useIntersection";

export default function Pricing() {
  const ref = useRef();
  const inViewport = useIntersection(ref, `-200px`);

  const rightShadowView =
    `<div id="shadowRight" style="right: 0px; top:` +
    window.innerHeight / 1.2 +
    `px; background: rgba(255,255,255,.8); border-radius: 10px 0 0px 10px" className="shadowRight position-fixed p-2 pe-3">
    <img src=${swipeLeft} style="width : 26px;">
    </div>`;

  const scrollEventListener = useCallback(() => {
    let scrollView = document.querySelector(".scrollView");
    if (!scrollView) return;
    let shadowLeft = document.querySelector(".shadowLeft");
    let shadowRight = document.querySelector(".shadowRight");
    if (shadowRight) shadowRight.remove();
    if (shadowLeft) shadowLeft.remove();

    if (
      inViewport &&
      scrollView.scrollLeft > 0 &&
      scrollView.scrollLeft <=
        scrollView.scrollWidth - scrollView.clientWidth - 10
    ) {
      scrollView.insertAdjacentHTML("beforeend", rightShadowView);
    } else if (
      inViewport &&
      scrollView.scrollWidth - scrollView.clientWidth > scrollView.scrollLeft
    )
      scrollView.insertAdjacentHTML("beforeend", rightShadowView);
  }, [inViewport, rightShadowView]);

  useEffect(() => {
    let scrollView = document.body;
    scrollView.addEventListener(
      "scroll",
      () => {
        scrollEventListener();
      },
      true
    );
    window.addEventListener(
      "scroll",
      () => {
        scrollEventListener();
      },
      true
    );
    window.addEventListener("resize", scrollEventListener);
    return () => {
      scrollView.removeEventListener("scroll", scrollEventListener);
      window.removeEventListener("resize", scrollEventListener);
    };
  }, [scrollEventListener]);

  return (
    <div style={{ background: "rgb(231, 237, 243)" }}>
      <div className="position-relative">
        <div
          style={{
            background: `url(${"./images/wr-pricing-header.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "75vh",
          }}
        >
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3 text-white">COMPARE OUR PLANS</h1>
                <p className="text-white fs-4 mt-4">
                  We have plans for every stage of your investing!
                  <br />
                  Whether you're just getting started or already have hundreds
                  of notes. There's a plan with you in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="p-3 container">
          <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3">
            <div className="col">
              <div className="card h-100">
                <div className="card-header">
                  <h4 className="card-title text-center align-items-center my-2">
                    Free!
                  </h4>
                </div>
                <div className="card-body p-0">
                  <div className=" p-2 border-bottom mb-3">
                    <h3 className="card-title text-center align-items-center my-2">
                      $0
                    </h3>
                    <p className="card-text text-center align-items-center">
                      Monthly Price
                    </p>
                    <p className="card-text text-center align-items-center fs-5 mb-3">
                      Max 1 Loan
                    </p>
                  </div>
                  <ul className="list-group list-group-flush p-2 py-3 ">
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Mobile Accessible
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Data Downloads{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Loans per Borrower
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Backdate Loans
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      One-Click Payoffs
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Borrowers per Loan
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Balloon Payments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-header">
                  <h4 className="card-title text-center align-items-center my-2">
                    Starter
                  </h4>
                </div>

                <div className="card-body p-0">
                  <div className=" p-2 border-bottom mb-3">
                    <h3 className="card-title text-center align-items-center my-2">
                      $25
                    </h3>
                    <p className="card-text text-center align-items-center">
                      Monthly Price
                    </p>
                    <p className="card-text text-center align-items-center fs-5 mb-3">
                      Max 5 Loans
                    </p>
                  </div>
                  <ul className="list-group list-group-flush p-2 py-3 ">
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Mobile Accessible
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Data Downloads{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Loans per Borrower
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Backdate Loans
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      One-Click Payoffs
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Borrowers per Loan
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Balloon Payments
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Transfers{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Automated Loan Imports
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-header">
                  <h4 className="card-title text-center align-items-center my-2">
                    Getting Serious
                  </h4>
                </div>

                <div className="card-body p-0">
                  <div className=" p-2 border-bottom mb-3">
                    <h3 className="card-title text-center align-items-center my-2">
                      $45
                    </h3>
                    <p className="card-text text-center align-items-center">
                      Monthly Price
                    </p>
                    <p className="card-text text-center align-items-center fs-5 mb-3">
                      Max 15 Loans
                    </p>
                  </div>
                  <ul className="list-group list-group-flush p-2 py-3 ">
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Mobile Accessible
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Data Downloads{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Loans per Borrower
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Backdate Loans
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      One-Click Payoffs
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Borrowers per Loan
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Balloon Payments
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Transfers{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Automated Loan Imports
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Team Member Accounts
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Partner Accounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-header">
                  <h4 className="card-title text-center align-items-center my-2">
                    Full Tilt
                  </h4>
                </div>

                <div className="card-body p-0">
                  <div className=" p-2 border-bottom mb-3">
                    <h3 className="card-title text-center align-items-center my-2">
                      $95
                    </h3>
                    <p className="card-text text-center align-items-center">
                      Monthly Price
                    </p>
                    <p className="card-text text-center align-items-center fs-5 mb-3">
                      Unlimited Loans
                    </p>
                  </div>
                  <ul className="list-group list-group-flush p-2 py-3 ">
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Mobile Accessible
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Data Downloads{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Loans per Borrower
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Backdate Loans
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      One-Click Payoffs
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Multiple Borrowers per Loan
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Balloon Payments
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Loan Transfers{" "}
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Automated Loan Imports
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Team Member Accounts
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Partner Accounts
                    </li>
                    <li className="list-group-item border-0">
                      <span style={{ marginRight: 5 }}>
                        <CheckIcon className="text-success" size={20} />
                      </span>
                      Automated Partner/Team Payments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 text-center container">
        <div className="card shadow-none my-4 ">
          <div className="card-header">
            <h4 className="mt-4 mb-4" style={{ fontSize: "5vh" }}>
              PLANS & PRICING
            </h4>
          </div>

          <div className="card-body p-0 ">
            <div className="table-responsive table-billing-history text-start scrollView overflow-scroll w-full d-none d-md-block">
              <table
                ref={ref}
                className="table mb-0 fs-5"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th className="border-gray-200 text-center" scope="col">
                      Plans
                    </th>
                    <th
                      className="border-gray-200 text-center"
                      style={{ width: 200 }}
                      scope="col"
                    >
                      Free!
                    </th>
                    <th
                      className="border-gray-200 text-center"
                      style={{ width: 200 }}
                      scope="col"
                    >
                      Starter
                    </th>
                    <th
                      className="border-gray-200 text-center"
                      style={{ width: 200 }}
                      scope="col"
                    >
                      Getting Serious
                    </th>
                    <th
                      className="border-gray-200 text-center"
                      style={{ width: 200 }}
                      scope="col"
                    >
                      Full Tilt
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center align-middle">Monthly Price</td>
                    <td className="text-center align-middle">Free</td>
                    <td className="text-center align-middle">$25</td>
                    <td className="text-center align-middle">$45</td>
                    <td className="text-center align-middle">$95</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Max Loans{" "}
                      <span data-tip data-for="monthlyPrice">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="monthlyPrice">
                        <span>
                          Maximum Number of Active <br />
                          Loans
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">1</td>
                    <td className="text-center align-middle">5</td>
                    <td className="text-center align-middle">15</td>
                    <td className="text-center align-middle">Unlimited</td>
                  </tr>
                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan={5}
                      style={{
                        width: 200,
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Payment Processing </b>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      Credit Card Payments
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">ACH Payments</td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Individual ACH Deposits{" "}
                      <span data-tip data-for="individualACHDeposits">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="individualACHDeposits"
                      >
                        <span>
                          Each Payment deposits <br />
                          individually without removing fees
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      ACH Refunds{" "}
                      <span data-tip data-for="individualACHDeposits1">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="individualACHDeposits1"
                      >
                        <span>
                          Refund ACH Payments <br /> to Borrowers for <br />
                          any reason
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Two Bank Accounts{" "}
                      <span data-tip data-for="twoBankAccounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="twoBankAccounts">
                        <span>
                          Easily split Income and <br />
                          Expenses between Bank Accounts
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      ACH{" "}
                      <span data-tip data-for="achTransactionFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achTransactionFee">
                        <span>
                          A Simple, Flat, <br /> Per-Transaction Fee
                        </span>
                      </ReactTooltip>
                      <br />
                      Payment Transaction Fee
                    </td>
                    <td className="text-center align-middle">$2</td>
                    <td className="text-center align-middle">$1.50</td>
                    <td className="text-center align-middle">$1</td>
                    <td className="text-center align-middle">$0.50</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      ACH{" "}
                      <span data-tip data-for="achMonthlyFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achMonthlyFee">
                        <span>
                          We don't charge you monthly <br />
                          just for collecting ACH payments
                        </span>
                      </ReactTooltip>
                      <br />
                      Monthly Fee
                    </td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      ACH{" "}
                      <span data-tip data-for="achRequiredReserves">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achRequiredReserves">
                        <span>
                          We never hold <br /> <b>Your Money</b> in reserve
                        </span>
                      </ReactTooltip>
                      <br />
                      Required Reserves
                    </td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                  </tr>
                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan={5}
                      style={{
                        width: 200,
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Features </b>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      Robust Automated Email Follow up
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Mobile Accessible{" "}
                      <span data-tip data-for="mobileAccessible">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="mobileAccessible">
                        <span>Fully Accessible Mobile Site</span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Loan Dashboard{" "}
                      <span data-tip data-for="loanDashboard">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanDashboard">
                        <span>
                          See critical information for <br /> all your loans at
                          a glance
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Loan Data Downloads{" "}
                      <span data-tip data-for="loanDataDownloads">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanDataDownloads">
                        <span>
                          It's your data <br /> so downloading is easy
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Multiple Loans per Borrower{" "}
                      <span data-tip data-for="perloan">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="perloan">
                        <span>
                          Repeat Buyer? No Sweat. <br />
                          Borrowers manage <br />
                          all their loans from <br />
                          one login
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Backdate Loans{" "}
                      <span data-tip data-for="backdateLoans">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="backdateLoans">
                        <span>
                          Easily backdate loans, <br /> payments, and fees
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      One-Click Payoffs{" "}
                      <span data-tip data-for="oneclickpayoffs">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="oneclickpayoffs">
                        <span>
                          Everyone can generate <br />
                          estimated payoff numbers
                          <br /> in just one click
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Multiple Borrowers per Loan{" "}
                      <span data-tip data-for="multipleBorrowersperLoan">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="multipleBorrowersperLoan"
                      >
                        <span>Add up to 5 Borrowers to a Loan</span>
                      </ReactTooltip>
                    </td>

                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Balloon Payments{" "}
                      <span data-tip data-for="balloonPayments">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="balloonPayments">
                        <span>
                          Add or Edit Balloon <br />
                          Payments any time
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">
                      {" "}
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      {" "}
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Loan Transfers{" "}
                      <span data-tip data-for="loantransfers">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loantransfers">
                        <span>
                          Easily Transfer Loans to <br />
                          another Lender
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle">
                      {" "}
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Automated Loan Imports{" "}
                      <span data-tip data-for="automatedloanimports">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="automatedloanimports">
                        <span>
                          Importing Loans from other <br /> systems in easy with
                          our <br /> automated import tool
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle">
                      {" "}
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Team Member Accounts{" "}
                      <span data-tip data-for="teammember1Accounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="teammember1Accounts">
                        <span>
                          Team Members can access <br /> and manage your loans
                          <br /> just as you can
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Partner Accounts{" "}
                      <span data-tip data-for="partner1Accounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="partner1Accounts">
                        <span>
                          An account made for that <br /> Partner or Lender who
                          wants a way
                          <br /> to keep tabs on the details
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      <span className="badge bg-light text-dark">
                        *COMING SOON*
                      </span>
                      <br />
                      Automated Partner/Team Payments{" "}
                      <span data-tip data-for="automatedPartner">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="automatedPartner">
                        <span>
                          Automatically send a portion <br /> of each payment
                          directly to your
                          <br /> Partner, Lender, or Team Member
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle"></td>
                    <td className="text-center align-middle">
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan={5}
                      style={{
                        width: 200,
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Miscellaneous Fees </b>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle text-nowrap">
                      Loan Setup Fee{" "}
                      <span data-tip data-for="loanSetupFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanSetupFee">
                        <span>
                          We never charge fees to setup <br />
                          loans
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                    <td className="text-center align-middle">$0</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      ACH
                      <br />
                      Return Payment Fee{" "}
                      <span data-tip data-for="returnPaymentFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="returnPaymentFee">
                        <span>
                          Insufficient Funds, Closed <br />
                          Accounts, Etc{" "}
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">$7</td>
                    <td className="text-center align-middle">$7</td>
                    <td className="text-center align-middle">$7</td>
                    <td className="text-center align-middle">$7</td>
                  </tr>
                  <tr>
                    <td className="text-center align-middle">
                      ACH
                      <br />
                      Unauthorized Return Payment Fee{" "}
                      <span data-tip data-for="unauthorizedReturnPaymentFee1">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="unauthorizedReturnPaymentFee1"
                      >
                        <span>
                          Payment Stopped, Canceled, <br />
                          or Revoked by Sender
                        </span>
                      </ReactTooltip>
                    </td>
                    <td className="text-center align-middle">$10</td>
                    <td className="text-center align-middle">$10</td>
                    <td className="text-center align-middle">$10</td>
                    <td className="text-center align-middle">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive table-billing-history text-start scrollView overflow-scroll w-full d-block d-sm-block d-md-none">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th
                      className="text-center align-middle"
                      scope="col"
                      style={{ width: "25%", padding: "10px 0px 10px" }}
                    >
                      Free!
                    </th>
                    <th
                      className="text-center align-middle"
                      scope="col"
                      style={{ width: "25%", padding: "10px 0px 10px" }}
                    >
                      Starter
                    </th>
                    <th
                      className="text-center align-middle"
                      scope="col"
                      style={{ width: "25%", padding: "10px 0px 10px" }}
                    >
                      Getting Serious
                    </th>
                    <th
                      className="text-center align-middle"
                      scope="col"
                      style={{ width: "25%", padding: "10px 0px 10px" }}
                    >
                      Full Tilt
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colspan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Monthly Price
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      Free
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $25
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $45
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $95
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colspan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Max Loans{" "}
                      <span data-tip data-for="monthlyPrice">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="monthlyPrice">
                        <span>
                          Maximum Number of <br /> Active Loans
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      1
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      5
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      15
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      Unlimited
                    </td>
                  </tr>

                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan="4"
                      style={{
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Payment Processing </b>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Credit Card Payments
                    </th>{" "}
                  </tr>

                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH Payments
                    </th>{" "}
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Individual ACH Deposits{" "}
                      <span data-tip data-for="individualACHDeposits">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="individualACHDeposits"
                      >
                        <span>
                          Each Payment deposits <br />
                          individually without <br />
                          removing fees
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH Refunds{" "}
                      <span data-tip data-for="achrefunds">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achrefunds">
                        <span>
                          Refund ACH Payments <br /> to Borrowers for <br />
                          any reason
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Two Bank Accounts{" "}
                      <span data-tip data-for="twoBankAccounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="twoBankAccounts">
                        <span>
                          Easily split Income and <br />
                          Expenses between Bank Accounts
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>

                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH{" "}
                      <span data-tip data-for="achTransactionFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achTransactionFee">
                        <span>
                          A Simple, Flat, <br /> Per-Transaction Fee
                        </span>
                      </ReactTooltip>
                      <br />
                      Payment Transaction Fee
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $2
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $1.50
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $1
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0.50
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH{" "}
                      <span data-tip data-for="achMonthlyFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achMonthlyFee">
                        <span>
                          We don't charge you <br /> monthly just for collecting{" "}
                          <br /> ACH payments
                        </span>
                      </ReactTooltip>
                      <br />
                      Monthly Fee
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH{" "}
                      <span data-tip data-for="achRequiredReserves">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="achRequiredReserves">
                        <span>
                          We never hold <br /> <b>Your Money</b> in reserve
                        </span>
                      </ReactTooltip>
                      <br />
                      Required Reserves
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                  </tr>

                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan={5}
                      style={{
                        width: 200,
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Features </b>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Robust Automated Email Follow up
                    </th>
                  </tr>
                  <tr>
                    {" "}
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Mobile Accessible{" "}
                      <span data-tip data-for="mobileAccessible">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="mobileAccessible">
                        <span>Fully Accessible Mobile Site</span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    {" "}
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Loan Dashboard{" "}
                      <span data-tip data-for="loanDashboard">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanDashboard">
                        <span>
                          See critical information <br /> for all your loans at{" "}
                          <br /> a glance
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Loan Data Downloads{" "}
                      <span data-tip data-for="loanDataDownloads">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanDataDownloads">
                        <span>
                          It's your data <br /> so downloading is easy
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Multiple Loans per Borrower{" "}
                      <span data-tip data-for="perloan">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="perloan">
                        <span>
                          Repeat Buyer? No Sweat. <br />
                          Borrowers manage <br />
                          all their loans from <br />
                          one login
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Backdate Loans{" "}
                      <span data-tip data-for="backdateLoans">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="backdateLoans">
                        <span>
                          Easily backdate loans, <br /> payments, and fees
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      One-Click Payoffs{" "}
                      <span data-tip data-for="oneclickpayoffs">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="oneclickpayoffs">
                        <span>
                          Everyone can generate
                          <br /> estimated payoff numbers <br />
                          in just one click
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Multiple Borrowers per Loan{" "}
                      <span data-tip data-for="multipleBorrowersperLoan">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="multipleBorrowersperLoan"
                      >
                        <span>Add up to 5 Borrowers to a Loan</span>
                      </ReactTooltip>
                    </th>
                  </tr>

                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Balloon Payments{" "}
                      <span data-tip data-for="balloonPayments">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="balloonPayments">
                        <span>
                          Add or Edit Balloon <br />
                          Payments any time
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Loan Transfers{" "}
                      <span data-tip data-for="loantransfers">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loantransfers">
                        <span>
                          Easily Transfer Loans
                          <br /> to another Lender
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      {/* <span className="badge bg-success text-center">✓</span> */}
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Automated Loan Imports{" "}
                      <span data-tip data-for="automatedloanimports">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="automatedloanimports">
                        <span>
                          Importing Loans from other <br /> systems in easy with
                          our <br /> automated import tool
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      {/* <span className="badge bg-success text-center">✓</span> */}
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Team Member Accounts{" "}
                      <span data-tip data-for="teammember1Accounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="teammember1Accounts">
                        <span>
                          Team Members can access <br /> and manage your loans
                          <br /> just as you can
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Partner Accounts{" "}
                      <span data-tip data-for="partner1Accounts">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="partner1Accounts">
                        <span>
                          An account made for <br /> that Partner or Lender{" "}
                          <br /> who wants a way
                          <br /> to keep tabs on <br /> the details
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      <span className="badge bg-light text-dark">
                        *COMING SOON*
                      </span>
                      <br />
                      Automated Partner/Team Payments{" "}
                      <span data-tip data-for="automatedPartner">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="automatedPartner">
                        <span>
                          Automatically send a<br /> portion of each <br />
                          payment directly to <br /> your Partner, <br />{" "}
                          Lender, or Team Member
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    ></td>
                    <td
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                      className="text-center align-middle"
                    >
                      <span className="badge bg-success text-center">✓</span>
                    </td>
                  </tr>

                  <tr>
                    <td
                      className="border-gray-200 text-center align-middle"
                      colSpan={5}
                      style={{
                        width: 200,
                        fontSize: "3vh",
                        backgroundColor: "#00000008",
                      }}
                    >
                      <b>Miscellaneous Fees </b>
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      Loan Setup Fee{" "}
                      <span data-tip data-for="loanSetupFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="loanSetupFee">
                        <span>
                          We never charge fees to <br /> setup loans
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $0
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH
                      <br />
                      Return Payment Fee{" "}
                      <span data-tip data-for="returnPaymentFee">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip place="TopCenter" id="returnPaymentFee">
                        <span>
                          Insufficient Funds, Closed <br />
                          Accounts, Etc{" "}
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $7
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $7
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $7
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $7
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-center align-middle"
                      colSpan="4"
                      style={{
                        width: "100%",
                        padding: "5px 0px 5px",
                        color: "#445649de",
                        border: "none",
                      }}
                    >
                      ACH
                      <br />
                      Unauthorized Return Payment Fee{" "}
                      <span data-tip data-for="unauthorizedReturnPaymentFee1">
                        <QuestionIcon className="text-primary" size={20} />
                      </span>
                      <ReactTooltip
                        place="TopCenter"
                        id="unauthorizedReturnPaymentFee1"
                      >
                        <span>
                          Payment Stopped, Canceled, <br />
                          or Revoked by Sender
                        </span>
                      </ReactTooltip>
                    </th>
                  </tr>
                  <tr>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $10
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $10
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $10
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ width: "25%", padding: "0px 0px 10px" }}
                    >
                      $10
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h3 style={{ marginTop: 50 }}>
          Let us know if you have any questions! Support@YourLandLoans.com
        </h3>
      </div>
    </div>
  );
}
