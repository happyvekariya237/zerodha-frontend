import React from "react";

export default function Navbar() {
  return (
    <>
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="/media/images/logo.svg"
                style={{ width: "30%" }}
                alt=""
                className="p-3"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Signup
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link active" aria-current="page" href="#">
                      Product
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Support
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                     <i class="fa-solid fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      
    </>
  );
}
