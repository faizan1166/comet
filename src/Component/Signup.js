import "../App.css";
import axios from "axios";
import { QuestionIcon } from "@primer/octicons-react";
import { useFormik } from "formik";
import * as yup from "yup";
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ReCAPTCHA from "react-google-recaptcha";

const grecaptchaObject = window.grecaptcha;

window.recaptchaOptions = {
  removeOnUnmount: true,
};

export default function Signup() {
  const [emailError, setEmailError] = useState("");
  const [refVal, setRefVal] = useState("");
  const [isSignUpReCaptchaDone, setIsSignUpReCaptchaDone] = useState(false);
  const [referralMenuItems] = useState([
    { value: "Google", text: "Google" },
    { value: "Friend", text: "Friend" },
    { value: "Casual Fridays REI", text: "Casual Fridays REI" },
    { value: "RETipster", text: "RETipster" },
    { value: "Land.MBA", text: "Land.MBA" },
    {
      value: "Land Investing Motivation Mastermind",
      text: "Land Investing Motivation Mastermind",
    },
    { value: "Paperstac", text: "Paperstac" },
    { value: "OTHER", text: "Other" },
  ]);

  useEffect(() => {
    const referer = sessionStorage?.getItem("referer");
    if (refVal === "" && referer !== undefined && referer !== null) {
      const temp = referralMenuItems.filter((row) =>
        referer.includes((row?.value).toLowerCase())
      );
      if (temp.length) {
        setRefVal(temp[0].value);
      } else {
        setRefVal("OTHER");
      }
    }
  }, [refVal, referralMenuItems]);

  const validationSchema = yup.object({
    userEmail: yup
      .string()
      .email("Enter Valid email Address")
      .required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    publicContactEmail: yup.string(),
    publicPhoneNumber: yup
      .string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,16}$/im,
        "Invalid phone number."
      ),
    businessPublicName: yup.string(),
    businessName: yup.string().required("Business Name is required"),
    otherReferralSource: yup
      .string()
      .max(60, "Referral Source must be at most 60 characters"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    street1: yup.string().required("Street1 is required"),
    street2: yup.string(),
    zipcode: yup
      .string()
      .required("Zipcode is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Enter 5-digit Postal Code")
      .max(5, "Enter 5-digit Postal Code"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userEmail: "",
      publicContactEmail: "",
      publicPhoneNumber: "",
      businessPublicName: "",
      businessName: "",
      referralSource: refVal,
      otherReferralSource: "",
      city: "",
      state: "",
      street1: "",
      street2: "",
      zipcode: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      lenderSignUp(formValues);
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
      .then(async (res) => {
        alert(res.data.message);
        window.location = "/ConfirmationPage";
      })
      .catch(async (error) => {
        alert(`Error- ${error.response.data.message}`);
        window.location = "/ConfirmationPage";
      });
  };

  const lenderSignUp = (lenderdata) => {
    axios(`${process.env.REACT_APP_SIGNUP_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        userSignup: {
          firstName: lenderdata.firstName,
          lastName: lenderdata.lastName,
          userEmail: lenderdata.userEmail,
          publicContactEmail: lenderdata.publicContactEmail,
          publicPhoneNumber: lenderdata.publicPhoneNumber,
          businessPublicName: lenderdata.businessPublicName,
          businessName: lenderdata.businessName,
          referralSource:
            lenderdata.referralSource === "OTHER"
              ? `${lenderdata.referralSource}#${lenderdata.otherReferralSource}`
              : lenderdata.referralSource,
          address: {
            city: lenderdata.city,
            state: lenderdata.state,
            street1: lenderdata.street1,
            street2: lenderdata.street2,
            zipcode: lenderdata.zipcode,
          },
        },
      },
    })
      .then(async () => {
        if (!lenderdata.userEmail?.includes("+")) {
          newsLetter(lenderdata);
        } else {
          window.location = "/ConfirmationPage";
        }
        setSubmitting(false);
        sessionStorage.clear();
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

  const onChangeReCAPTCHA = (value) => {
    if (value) setIsSignUpReCaptchaDone(true);
  };

  return (
    <div className="row  pt-5 pb-5 mt-5 overflow-hidden g-0">
      <div className="col-md-4 px-4  d-none  d-md-block">
        <div className="card shadow-md border-0 rounded-3 h-100 card-body position-relative">
          <h2 className=" position-absolute top-50 start-50 translate-middle">
            Welcome to Your Land Loans!
          </h2>
        </div>
      </div>
      <div className=" offset-md-1 col-md-6 px-5 ">
        <div className="card-header text-center justify-content-center">
          <h3 className="text-success my-4">CREATE LENDER ACCOUNT</h3>
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
                <div className="text-danger small">{errors.userEmail}</div>
              ) : emailError ===
                `You can not use ${values.userEmail} to create a Lender Account, Please try a different email` ? (
                <div className="text-danger small">Email already in use.</div>
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
                  <div className="text-danger small">{errors.firstName}</div>
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
                  <div className="text-danger small">{errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-md-6 mb-2">
                <label className="mb-1 custom-required">Business Name</label>
                <input
                  className="form-control my-1"
                  id="businessName"
                  type="text"
                  placeholder="Awesome Land Company, LLC"
                  {...getFieldProps("businessName")}
                  value={values.businessName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.businessName && errors.businessName ? (
                  <div className="text-danger small">{errors.businessName}</div>
                ) : null}
              </div>
              <div className="col-md-6 mb-2">
                <label className="mb-1">
                  Public Business name{" "}
                  <span data-tip data-for="businessPublicName">
                    <QuestionIcon className="text-primary" size={16} />
                  </span>
                  <ReactTooltip id="businessPublicName">
                    <span>
                      Alternative Business Name to be shared with your Borrowers
                    </span>
                  </ReactTooltip>
                </label>

                <input
                  className="form-control my-1"
                  id="businessPublicName"
                  type="text"
                  placeholder="Awesome Land Company"
                  {...getFieldProps("businessPublicName")}
                  value={values.businessPublicName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.businessPublicName && errors.businessPublicName ? (
                  <div className="text-danger small">
                    {errors.businessPublicName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-md-6 mb-2">
                <label className="mb-1 custom-required">Street1</label>
                <input
                  className="form-control my-1"
                  id="street1"
                  type="text"
                  placeholder="123 Main St"
                  {...getFieldProps("street1")}
                  value={values.street1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.street1 && errors.street1 ? (
                  <div className="text-danger small">{errors.street1}</div>
                ) : null}
              </div>
              <div className="col-md-6 mb-2">
                <label className="mb-1">Street2</label>
                <input
                  className="form-control my-1"
                  id="street2"
                  type="text"
                  placeholder="STE 125"
                  {...getFieldProps("street2")}
                  value={values.street2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.street2 && errors.street2 ? (
                  <div className="text-danger small">{errors.street2}</div>
                ) : null}
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-md-4 mb-2">
                <label className="mb-1 custom-required">City</label>
                <input
                  className="form-control"
                  id="city"
                  type="text"
                  placeholder="Denver"
                  {...getFieldProps("city")}
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.city && errors.city ? (
                  <div className="text-danger small">{errors.city}</div>
                ) : null}
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1 custom-required">State</label>
                <select
                  className="form-select"
                  id="state"
                  {...getFieldProps("state")}
                >
                  <option>Select State</option>
                  <option value="AL">Alabama (AL)</option>
                  <option value="AK">Alaska (AK)</option>
                  <option value="AZ">Arizona (AZ)</option>
                  <option value="AR">Arkansas (AR)</option>
                  <option value="CA">California (CA)</option>
                  <option value="CO">Colorado (CO)</option>
                  <option value="CT">Connecticut (CT)</option>
                  <option value="DE">Delaware (DE)</option>
                  <option value="DC">District Of Columbia (DC)</option>
                  <option value="FL">Florida (FL)</option>
                  <option value="GA">Georgia (GA)</option>
                  <option value="HI">Hawaii (HI)</option>
                  <option value="ID">Idaho (ID)</option>
                  <option value="IL">Illinois (IL)</option>
                  <option value="IN">Indiana (IN)</option>
                  <option value="IA">Iowa (IA)</option>
                  <option value="KS">Kansas (KS)</option>
                  <option value="KY">Kentucky (KY)</option>
                  <option value="LA">Louisiana (LA)</option>
                  <option value="ME">Maine (ME)</option>
                  <option value="MD">Maryland (MD)</option>
                  <option value="MA">Massachusetts (MA)</option>
                  <option value="MI">Michigan (MI)</option>
                  <option value="MN">Minnesota (MN)</option>
                  <option value="MS">Mississippi (MS)</option>
                  <option value="MO">Missouri (MO)</option>
                  <option value="MT">Montana (MT)</option>
                  <option value="NE">Nebraska (NE)</option>
                  <option value="NV">Nevada (NV)</option>
                  <option value="NH">New Hampshire (NH)</option>
                  <option value="NJ">New Jersey (NJ)</option>
                  <option value="NM">New Mexico (NM)</option>
                  <option value="NY">New York (NY)</option>
                  <option value="NC">North Carolina (NC)</option>
                  <option value="ND">North Dakota (ND)</option>
                  <option value="OH">Ohio (OH)</option>
                  <option value="OK">Oklahoma (OK)</option>
                  <option value="OR">Oregon (OR)</option>
                  <option value="PA">Pennsylvania (PA)</option>
                  <option value="RI">Rhode Island (RI)</option>
                  <option value="SC">South Carolina (SC)</option>
                  <option value="SD">South Dakota (SD)</option>
                  <option value="TN">Tennessee (TN)</option>
                  <option value="TX">Texas (TX)</option>
                  <option value="UT">Utah (UT)</option>
                  <option value="VT">Vermont (VT)</option>
                  <option value="VA">Virginia (VA)</option>
                  <option value="WA">Washington (WA)</option>
                  <option value="WV">West Virginia (WV)</option>
                  <option value="WI">Wisconsin (WI)</option>
                  <option value="WY">Wyoming (WY)</option>
                </select>

                {touched.state && errors.state ? (
                  <div className="text-danger small">{errors.state}</div>
                ) : null}
              </div>
              <div className="col-md-4 mb-2">
                <label className="mb-1 custom-required">Zipcode</label>
                <input
                  className="form-control"
                  id="zipcode"
                  type="text"
                  placeholder="80014"
                  {...getFieldProps("zipcode")}
                  value={values.zipcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.zipcode && errors.zipcode ? (
                  <div className="text-danger small">{errors.zipcode}</div>
                ) : null}
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-md-6 mb-3">
                <label className="mb-1">
                  Public Contact Email{" "}
                  <span data-tip data-for="publicContactEmail">
                    <QuestionIcon className="text-primary" size={16} />
                  </span>
                  <ReactTooltip id="publicContactEmail">
                    <span>
                      Alternative Email Address to be shared with your Borrowers
                    </span>
                  </ReactTooltip>
                </label>
                <input
                  className="form-control my-1"
                  id="publicContactEmail"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Support@AwesomeLandCompany.com"
                  {...getFieldProps("publicContactEmail")}
                  value={values.publicContactEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.publicContactEmail && errors.publicContactEmail ? (
                  <div className="text-danger small">
                    {errors.publicContactEmail}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6 mb-1">
                <label className="mb-1">
                  Public Phone Number{" "}
                  <span data-tip data-for="publicPhoneNumber">
                    <QuestionIcon className="text-primary" size={16} />
                  </span>
                  <ReactTooltip id="publicPhoneNumber">
                    <span>
                      A Phone Number that can be shown to your Borrowers
                    </span>
                  </ReactTooltip>
                </label>
                <input
                  className="form-control my-1"
                  id="publicPhoneNumber"
                  type="text"
                  placeholder="480-111-2233"
                  {...getFieldProps("publicPhoneNumber")}
                  value={values.publicPhoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.publicPhoneNumber && errors.publicPhoneNumber ? (
                  <div className="text-danger small">
                    {errors.publicPhoneNumber}
                  </div>
                ) : null}
              </div>

              <div className="col-md-12 mb-4">
                <label className="mb-1">Where did you hear about us?</label>
                <Dropdown className="w-100 border rounded mb-2">
                  <Dropdown.Toggle
                    variant="default"
                    id="dropdown-basic"
                    className="w-100 text-start d-flex align-items-center"
                  >
                    {values.referralSource === ""
                      ? "Select Referral Source"
                      : values.referralSource}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="w-100">
                    {values.referralSource !== "" ? (
                      <Dropdown.Item
                        onClick={() =>
                          formik.setFieldValue("referralSource", "")
                        }
                      >
                        None
                      </Dropdown.Item>
                    ) : null}
                    {referralMenuItems.map((item) => (
                      <Dropdown.Item
                        onClick={() =>
                          formik.setFieldValue("referralSource", item.value)
                        }
                      >
                        {item.text}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {values.referralSource === "OTHER" && (
                  <div>
                    <input
                      className="form-control mt-3"
                      id="otherReferralSource"
                      type="text"
                      placeholder="Referral Source..."
                      value={values.otherReferralSource}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.otherReferralSource &&
                    errors.otherReferralSource ? (
                      <div className="text-danger small">
                        {errors.otherReferralSource}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>

            {!window.location.origin.includes("dev") && (
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onChangeReCAPTCHA}
                onExpired={() => setIsSignUpReCaptchaDone(false)}
                onErrored={() => setIsSignUpReCaptchaDone(false)}
              />
            )}
            <div className="text-center my-3">
              <button
                className="btn text-white btn-success btn-block mt-3 fs-5 px-5 fw-bold w-100"
                type="submit"
                disabled={
                  !isSignUpReCaptchaDone &&
                  !window.location.origin.includes("dev")
                }
              >
                {formik.isSubmitting ? (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Create Lender Account"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="card-footer text-center">
          <div className="medium text-success fw-bold mb-4">
            <a href={`${process.env.REACT_APP_LOGIN_URL}`}>
              Have an account? Go to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
