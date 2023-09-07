import "../App.css";

export default function Beta() {
  return (
    <div style={{ background: "#e7edf3", height: "100vh" }}>
      <div
        className="p-5 text-center"
        style={{ position: "absolute", top: "30%" }}
      >
        <h1 className="display-2 text-success mb-4">Welcome!</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3 align-self-center">
            <h5 className="text-muted fst-italic fs-4">
              Thanks for your interest in signing up with Your Land Loans! We're
              excited to have you but unfortunately at this moment we are only
              working with a handpicked group of Lenders as we work our way
              through the Beta. We'll be sure to broadcast it loud and clear
              when we're ready to welcome you on-board!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
