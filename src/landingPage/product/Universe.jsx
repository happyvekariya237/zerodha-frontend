import React from "react";

export default function Universe() {
  return (
    <div>
      <div className="head text-center">
        <h3>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
        <h2 className="mt-5">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="bdy p-5">
          <div className="container mt-5 ">
            <div className="row mt-5">
              <div className="col">
                <img
                  src="/media/images/zerodhafundhouse.png"
                  alt=""
                  style={{ width: "50%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Our asset management venture that is creating simple and
                  transparent index funds to help you save for your goals.
                </p>
              </div>
              <div className="col">
                <img
                  src="/media/images/sensibull-logo.svg"
                  alt=""
                  style={{ width: "50%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Options trading platform that lets you create strategies,
                  analyze positions, and examine data points like open interest,
                  FII/DII, and more.
                </p>
              </div>
              <div className="col">
                <img
                  src="/media/images/tijori.svg"
                  alt=""
                  style={{ width: "50%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Investment research platform that offers detailed insights on
                  stocks, sectors, supply chains, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <img
                  src="/media/images/streak-logo.png"
                  alt=""
                  style={{ width: "50%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Systematic trading platform that allows you to create and
                  backtest strategies without coding.
                </p>
              </div>
              <div className="col">
                <img
                  src="/media/images/smallcase-logo.png"
                  alt=""
                  style={{ width: "50%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Thematic investing platform that helps you invest in
                  diversified baskets of stocks on ETFs.
                </p>
              </div>
              <div className="col">
                <img
                  src="/media/images/ditto-logo.png"
                  alt=""
                  style={{ width: "40%" }}
                />
                <p style={{ fontSize: "small" }} className=" p-5">
                  Personalized advice on life and health insurance. No spam and
                  no mis-selling
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          style={{
            width: "20%",
            height: "50px",
            margin: "0 auto",
            fontSize: "large",
          }}
          type="button"
          class="btn btn-primary mt-4"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
