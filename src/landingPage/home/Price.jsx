import React from "react";

export default function Price() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-4  p-5">
            <h2>Unbeatable pricing</h2>
            <h6 className="mt-4">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </h6>
            <a href="" className="mt-5">
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-8 d-flex p-5 mb-5">
            <div className="one d-flex mb-5">
              <div>
                <img
                  src="/media/images/0.svg"
                  alt=""
                  style={{ height: "175px", width: "150px" }}
                  className="mb-5"
                />
              </div>
              <div className="mt-5">Free account opening</div>
            </div>
            <div className="one d-flex mb-5">
              <div>
                <img
                  src="/media/images/0.svg"
                  alt=""
                  style={{ height: "175px", width: "150px" }}
                  className="mb-5"
                />
              </div>
              <div className="mt-5">
                Free equity delivery and direct mutual funds
              </div>
            </div>
            <div className="one d-flex mb-5">
              <div>
                <img
                  src="/media/images/0.svg"
                  alt=""
                  style={{ height: "175px", width: "150px" }}
                  className="mb-5"
                />
              </div>
              <div className="mt-5">Intraday and F&O</div>
            </div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
      </div>
  )
}
