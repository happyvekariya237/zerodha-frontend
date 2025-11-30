import React from "react";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(240, 238, 235)" }}>
      <div className="container mt-5">
        <div className="row mt-5 p-5">
          {/* Logo and social icons */}
          <div className="col">
            <img
              src="/media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "60%" }}
            />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="logos">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <br />
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Footer columns */}
          <div className="col footer-con">
            <h4>Account</h4>
            <ul>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div className="col footer-con">
            <h4>Support</h4>
            <ul>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div className="col footer-con">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>

          <div className="col footer-con">
            <h4>Quick links</h4>
            <ul>
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <div className="bottom" style={{ color: "grey", fontSize: "small" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, SEBI Registration no.:
            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
            Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address:
            Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
            Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints pertaining to securities
            broking please write to complaints@zerodha.com, for DP related to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. 3) Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>
          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day..."
          </p>
        </div>

        {/* Footer bottom links */}
        <div
          className="comp d-flex justify-content-between"
          style={{ color: "grey" }}
        >
          <p>NSC</p>
          <p>BSC</p>
          <p>MCX</p>
          <p>Terms & conditions</p>
          <p>Policies & Procedures</p>
          <p>Privacy Policy</p>
          <p>Disclosures</p>
          <p>For investors Attention</p>
          <p>Investors charters</p>
        </div>
      </div>
    </div>
  );
}
