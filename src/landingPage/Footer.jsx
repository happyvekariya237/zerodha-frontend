import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row mt-5 p-5">
          <div className="col">
            <img src="/media/images/logo.svg" alt="" style={{width:"60%"}}/>
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="logos">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <br />
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col footer-con">
          <h4>  Account</h4><br />
          <a>  Open demat account</a><br />
          <a>  Minor demat account</a><br />
          <a>  NRI demat account</a><br />
          <a>  Commodity</a><br />
          <a>  Dematerialisation</a><br />
          <a>  Fund transfer</a><br />
          <a>  MTF</a><br />
          <a>  Referral program</a>
          </div>
          <div className="col footer-con">
            <h4>Support</h4><br />
            <a>Contact us</a><br />
            <a>Support portal</a><br />
            <a>How to file a complaint?</a><br />
            <a>Status of your complaints</a><br />
            <a>Bulletin</a><br />
            <a>Circular</a><br />
            <a>Z-Connect blog</a><br />
            <a>Downloads</a>
          </div>
          <div className="col footer-con">
            <h4>Company</h4><br />
            <a>About</a><br />
            <a>Philosophy</a><br />
            <a>Press & media</a><br />
            <a>Careers</a><br />
            <a>Zerodha Cares (CSR)</a><br />
            <a>Zerodha.tech</a><br />
            <a>Open source</a>
          </div>
          <div className="col footer-con">
            <h4>Quick links</h4><br />
            <a>Upcoming IPOs</a><br />
            <a>Brokerage charges</a><br />
            <a>Market holidays</a><br />
            <a>Economic calendar</a><br />
            <a>Calculators</a><br />
            <a>Markets</a><br />
            <a>Sectors</a>
          </div>
        </div>
        <div className="bottom" style={{color:"grey",fontSize:"small"}}>
          <p>Zerodha Broking Ltd.: Member of NSE,   SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
        <div className="comp d-flex justify-content-between" style={{color:"grey"}}>
          <p>NSC</p>
          <p>BSC</p>
          <p>MCX</p>
          <p>Terms & conditions</p>
          <p>Policies & Producers</p>
          <p>Privacy Policy</p>
          <p>Disclousers</p>
          <p>For investors Attension</p>
          <p>Investors charters</p>
        </div>
      </div>
    </div>
  );
}
