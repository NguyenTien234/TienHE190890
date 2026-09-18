import React from "react";
import "./App.css";

function App() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#home">
            Bootstrap 5
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                >
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="bg-light py-5"
      >
        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <h1 className="display-4 fw-bold">
                Welcome to Bootstrap 5
              </h1>

              <p className="lead mt-3">
                Build responsive and modern websites
                easily with Bootstrap 5.
              </p>

              <button className="btn btn-primary btn-lg me-2">
                Get Started
              </button>

              <button className="btn btn-outline-dark btn-lg">
                Learn More
              </button>

            </div>


            <div className="col-lg-5 mt-4 mt-lg-0">

              <div className="card shadow">

                <div className="card-body text-center p-5">

                  <h2>
                    Bootstrap
                  </h2>

                  <p>
                    Powerful front-end framework
                    for developing responsive websites.
                  </p>

                  <span className="badge bg-primary">
                    Bootstrap 5
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ALERT ================= */}

      <div className="container mt-4">

        <div className="alert alert-success">

          <strong>Success!</strong>

          {" "}
          Your Bootstrap website is working correctly.

        </div>

      </div>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-5"
      >

        <div className="container">

          <div className="text-center mb-5">

            <h2>
              About Us
            </h2>

            <p className="text-muted">
              Learn more about our website.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <div className="card-body text-center">

                  <div className="feature-icon">
                    💻
                  </div>

                  <h4>
                    Web Design
                  </h4>

                  <p>
                    Create beautiful and modern
                    website interfaces.
                  </p>

                  <button className="btn btn-primary">
                    Read More
                  </button>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <div className="card-body text-center">

                  <div className="feature-icon">
                    📱
                  </div>

                  <h4>
                    Responsive
                  </h4>

                  <p>
                    Websites work perfectly on
                    computers and mobile devices.
                  </p>

                  <button className="btn btn-success">
                    Read More
                  </button>

                </div>

              </div>

            </div>


            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <div className="card-body text-center">

                  <div className="feature-icon">
                    ⚡
                  </div>

                  <h4>
                    Fast
                  </h4>

                  <p>
                    Bootstrap helps developers
                    build websites quickly.
                  </p>

                  <button className="btn btn-warning">
                    Read More
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="bg-light py-5"
      >

        <div className="container">

          <div className="text-center mb-5">

            <h2>
              Our Services
            </h2>

            <p className="text-muted">
              We provide different services.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="card service-card h-100">

                <div className="card-body text-center">

                  <h3 className="text-primary">
                    01
                  </h3>

                  <h5>
                    Web Design
                  </h5>

                  <p>
                    Professional website design.
                  </p>

                  <span className="badge bg-primary">
                    Design
                  </span>

                </div>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="card service-card h-100">

                <div className="card-body text-center">

                  <h3 className="text-success">
                    02
                  </h3>

                  <h5>
                    Development
                  </h5>

                  <p>
                    Modern web development.
                  </p>

                  <span className="badge bg-success">
                    Development
                  </span>

                </div>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="card service-card h-100">

                <div className="card-body text-center">

                  <h3 className="text-warning">
                    03
                  </h3>

                  <h5>
                    Mobile
                  </h5>

                  <p>
                    Mobile responsive interfaces.
                  </p>

                  <span className="badge bg-warning text-dark">
                    Mobile
                  </span>

                </div>

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="card service-card h-100">

                <div className="card-body text-center">

                  <h3 className="text-danger">
                    04
                  </h3>

                  <h5>
                    Support
                  </h5>

                  <p>
                    Technical customer support.
                  </p>

                  <span className="badge bg-danger">
                    Support
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TABLE ================= */}

      <section className="py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Bootstrap Table
          </h2>

          <div className="table-responsive">

            <table className="table table-striped table-hover">

              <thead className="table-dark">

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>Nguyen Van A</td>
                  <td>a@gmail.com</td>
                  <td>
                    <span className="badge bg-success">
                      Active
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Nguyen Van B</td>
                  <td>b@gmail.com</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Nguyen Van C</td>
                  <td>c@gmail.com</td>
                  <td>
                    <span className="badge bg-danger">
                      Inactive
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ================= FORM ================= */}

      <section
        id="contact"
        className="bg-light py-5"
      >

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-7">

              <h2 className="text-center mb-4">
                Contact Us
              </h2>

              <form>

                <div className="mb-3">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />

                </div>


                <div className="mb-3">

                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-dark text-white py-4">

        <div className="container">

          <div className="row">

            <div className="col-md-6">

              <h5>
                Bootstrap 5
              </h5>

              <p>
                Bootstrap 5 website project.
              </p>

            </div>


            <div className="col-md-6 text-md-end">

              <p>
                © 2026 Bootstrap Project
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;