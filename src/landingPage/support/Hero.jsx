import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="container my-5">

        <div className="row">
          <div className="col-md-8">

            <div className="accordion" id="supportAccordion">

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item1">

                    <i className="bi bi-plus-circle text-primary fs-4"></i>
                    <span className="fw-semibold">Account Opening</span>

                  </button>
                </h2>
                <div id="item1" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item2">

                    <i className="bi bi-person-circle text-primary fs-4"></i>
                    <span className="fw-semibold">Your Zerodha Account</span>

                  </button>
                </h2>
                <div id="item2" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item3">

                    <i className="bi bi-grid-3x3-gap text-primary fs-4"></i>
                    <span className="fw-semibold">Kite</span>

                  </button>
                </h2>
                <div id="item3" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item4">

                    <i className="bi bi-cash-stack text-primary fs-4"></i>
                    <span className="fw-semibold">Funds</span>

                  </button>
                </h2>
                <div id="item4" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item5">

                    <i className="bi bi-at text-primary fs-4"></i>
                    <span className="fw-semibold">Console</span>

                  </button>
                </h2>
                <div id="item5" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed d-flex align-items-center gap-3"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#item6">

                    <i className="bi bi-arrow-clockwise text-primary fs-4"></i>
                    <span className="fw-semibold">Coin</span>

                  </button>
                </h2>
                <div id="item6" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Content here...
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="p-3 mb-4" style={{ background: "#fff7ec", borderLeft: "5px solid orange" }}>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-primary">Current Buybacks - November 2025</a>
                </li>
                <li>
                  <a href="#" className="text-primary">Offer for sale (OFS) – November 2025</a>
                </li>
              </ul>
            </div>

            <div className="border rounded">
              <div className="p-3 fw-semibold bg-light">Quick links</div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="#">1. Track account opening</a></li>
                <li className="list-group-item"><a href="#">2. Track segment activation</a></li>
                <li className="list-group-item"><a href="#">3. Intraday margins</a></li>
                <li className="list-group-item"><a href="#">4. Kite user manual</a></li>
                <li className="list-group-item"><a href="#">5. Learn how to create a ticket</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
