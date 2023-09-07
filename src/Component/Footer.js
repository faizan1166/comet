import "../App.css";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

let widgetId1;
export default function Footer() {
  const [modalShow, setModalShow] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [isReCaptchaDone, setIsReCaptchaDone] = useState(false);
  const validationSchema = yup.object({
    userEmail: yup
      .string()
      .email("Enter Valid email Address")
      .required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userEmail: "",
    },
    validationSchema,
    onSubmit: (formValues) => {
      if (!formValues.userEmail?.includes("+")) {
        newsLetter(formValues);
      } else {
        setModalShow(false);
      }
    },
  });

  const {
    touched,
    errors,
    getFieldProps,
    handleBlur,
    handleSubmit,
    values,
    handleChange,
    setSubmitting,
  } = formik;

  const newsLetter = (lenderdata) => {
    axios(`${process.env.REACT_APP_SIGNUP_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        newsletterSignup: {
          firstName: lenderdata.firstName,
          lastName: lenderdata.lastName,
          userEmail: lenderdata.userEmail,
        },
      },
    })
      .then(async () => {
        // alert(res.data.message);
        setEmailConfirm(true);
        setSubmitting(false);
      })
      .catch(async (error) => {
        if (
          error.response.data.message ===
          `You can not use ${formik.values.userEmail} to create a Lender Account, Please try a different email`
        ) {
          setEmailError(error.response.data.message);
          alert("Email already in use. Please try another email");
          setSubmitting(false);
        } else {
          alert(`Error- ${error.response.data.message}`);
          setSubmitting(false);
        }
      });
  };

  const verifyCallback = (value) => {
    if (value) setIsReCaptchaDone(true);
  };

  const expiredRecaptcha = () => {
    console.log("expired");
    widgetId1.reset("captcha");
    setIsReCaptchaDone(false);
  };
  const createRecaptcha = () => {
    window.grecaptcha?.ready(function () {
      widgetId1 = window.grecaptcha.render("captcha", {
        sitekey: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
        callback: verifyCallback,
        "expired-callback": expiredRecaptcha,
        "error-callback": setIsReCaptchaDone(false),
      });
    });
  };

  return (
    <div style={{ background: " rgb(0 0 0 / 88%)" }}>
      <footer
        className="container-xxl p-0 footer-admin  footer-light bg-white "
        data-wow-duration="2.5s"
        style={{ visibility: "visible", animationDuration: "2.5s" }}
      >
        <div
          className="row mx-0 px-2 py-4 w-100"
          style={{ background: " rgb(0 0 0 / 88%)" }}
        >
          <div className="col-md-3 small align-self-center text-white fs-6">
            <NavLink className=" fs-6" to="mailto:Support@YourLandLoans.com">
              Support@YourLandLoans.com
            </NavLink>
            <br />
            &copy;Your Land Loans LLC All Rights Reserved
          </div>
          <div className="col-md-6 ">
            <div className="col-md-12 d-flex justify-content-center align-self-center text-center text-white my-2">
              <button
                // style={{ background: "#008e00", color: "white" }}
                type="button"
                className=" btn text-white btn-success fs-6  fw-bold mb-2"
                onClick={() => {
                  setModalShow(true);
                  setEmailConfirm(false);
                  formik.resetForm();
                  createRecaptcha();
                }}
              >
                Subscribe for Updates!
              </button>
            </div>
            <div className="col-md-12 d-flex justify-content-center align-self-center text-center text-white my-2">
              <NavLink className=" fs-6" to="/">
                Home
              </NavLink>
              <span className=" ps-2 pe-2 fs-6">•</span>
              <NavLink className=" fs-6" to="pricing">
                Pricing
              </NavLink>
              <span className=" ps-2 pe-2 fs-6">•</span>
              <NavLink className=" fs-6" to="faq">
                FAQ
              </NavLink>
              <span className=" ps-2 pe-2 fs-6">•</span>
              <NavLink className=" fs-6" to="/Signup">
                Sign up!
              </NavLink>
              <span className=" ps-2 pe-2 fs-6">•</span>
              <a className=" fs-6" href={`${process.env.REACT_APP_LOGIN_URL}`}>
                Log In
              </a>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-center align-self-center text-end text-white">
            <NavLink className=" fs-6" to="termsofservice">
              Terms of Service
            </NavLink>
            <span className=" ps-2 pe-2 fs-6">•</span>
            <NavLink className=" fs-6" to="privacy">
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </footer>
      <Modal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          formik.resetForm();
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {emailConfirm ? (
            <>
              <div className="card-header text-center justify-content-center">
                <h3 className="text-success">Congratulations!</h3>
              </div>
              <div className="card-body py-5">
                <h5 className="text-center justify-content-center text-muted">
                  Thanks for joining our Newsletter! You can look forward to
                  exciting updates hitting your inbox regularly.
                </h5>
              </div>
              <div className="d-grid gap-5 d-md-flex justify-content-md-end">
                <button
                  className="btn text-success  btn-block fs-6 fw-bold "
                  onClick={() => {
                    setEmailConfirm(false);
                    setModalShow(false);
                    formik.resetForm();
                  }}
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="card-header text-center justify-content-center">
                <h3 className="text-success ">Newsletter Signup</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-1 custom-required">Email</label>
                    <input
                      className="form-control my-1"
                      id="userEmail"
                      type="email"
                      aria-describedby="emailHelp"
                      placeholder="JohnSmith@AwesomeLandCompany.com"
                      {...getFieldProps("userEmail")}
                      value={values.userEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // error={touched.userEmail && Boolean(errors.userEmail)}
                      // helpertext={touched.userEmail && errors.userEmail}
                    />
                    {touched.userEmail && errors.userEmail ? (
                      <div className="text-danger small">
                        {errors.userEmail}
                      </div>
                    ) : emailError ===
                      `You can not use ${values.userEmail} to create a Lender Account, Please try a different email` ? (
                      <div className="text-danger small">
                        Email already in use.
                      </div>
                    ) : null}
                  </div>
                  <div className="row gx-3">
                    <div className="col-md-6 mb-2">
                      <label className="mb-1 custom-required">First Name</label>
                      <input
                        className="form-control my-1 is-validated"
                        id="firstName"
                        type="text"
                        placeholder="John"
                        {...getFieldProps("firstName")}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.firstName && errors.firstName ? (
                        <div className="text-danger small">
                          {errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-6 mb-2">
                      <label className="mb-1 custom-required">Last Name</label>
                      <input
                        className="form-control my-1"
                        id="lastName"
                        type="text"
                        placeholder="Smith"
                        {...getFieldProps("lastName")}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.lastName && errors.lastName ? (
                        <div className="text-danger small">
                          {errors.lastName}
                        </div>
                      ) : null}
                    </div>
                    {!window.location.origin.includes("dev") && (
                      <div id="captcha"></div>
                    )}{" "}
                    <div className="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                      <button
                        className="btn text-success  btn-block fs-6 fw-bold "
                        onClick={() => {
                          setModalShow(false);
                          formik.resetForm();
                        }}
                      >
                        Close
                      </button>
                      <Button
                        className="btn text-white btn-success fs-6  fw-bold px-3"
                        type="submit"
                        disabled={
                          !isReCaptchaDone &&
                          !window.location.origin.includes("dev")
                        }
                      >
                        {formik.isSubmitting ? (
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Add Email"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
