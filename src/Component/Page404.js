import { NavLink } from "react-router-dom";
import "../App.css";
import page404 from "../Image/Page_404.svg";

export default function Page404() {
  return (
    <div style={{ background: "#e7edf3" }}>
      <div className="container">
        <div className="row mt-5 align-middle">
          <div className="text-center mt-5">
            <img
              src={page404}
              alt="404"
              className=""
              style={{ height: "80%" }}
            />
          </div>
          <h1
            className="text-center text-danger primary-green"
            style={{ fontSize: " 6vh" }}
          >
            Sorry, page not found!
          </h1>

          <p
            className="content text-center text-muted pt-3 fs-3 m-auto mb-5"
            style={{ maxWidth: "55ch" }}
          >
            Sorry! We couldn’t find the page you’re looking for. Please double
            check the URL you've entered or return to{" "}
            <NavLink style={{ color: "#008e00" }} to="/">
              Home
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
