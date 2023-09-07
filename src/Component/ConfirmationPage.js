import "../App.css";

export default function ConfirmationPage() {
  return (
    <div style={{ background: "#e7edf3", height: "100vh" }}>
      <div className="container">
        <div
          className="row card shadow-md border-0 rounded-3 card-body"
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            right: "20%",
          }}
        >
          <h1
            className="text-center text-success primary-green mt-2"
            style={{ fontSize: " 6vh" }}
          >
            Thanks for Signing up!
          </h1>
          <p className="content text-center pt-3 fs-3">
            <i className="text-muted">
              Please check your email for your temporary password.
            </i>
            <a
              className="nav-link mt-5"
              href="https://app.yourlandloans.com/login"
            >
              <h4 className=" btn btn-success px-5 fs-4">LogIn</h4>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
