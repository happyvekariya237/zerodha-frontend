import React from "react";

export default function AllPeople() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img
              src="/media/images/Nikhil.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Nikhil Kamath</p>
              <p>Co-founder & CEO</p>
            </div>
          </div>
          <div className="col"><img
              src="/media/images/Kailash.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Dr. Kailash Nadh</p>
              <p>CTO</p>
            </div></div>
          <div className="col"><img
              src="/media/images/Venu.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Venu Madhav</p>
              <p>Coo</p>
            </div></div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="/media/images/Hanan.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Hanan Delvi</p>
              <p>cco</p>
            </div>
          </div>
          <div className="col"><img
              src="/media/images/Seema.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Seema Patil</p>
              <p>Director</p>
            </div></div>
          <div className="col"><img
              src="/media/images/karthik.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Karthik Rangappa</p>
              <p>Chief of Education</p>
            </div></div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="/media/images/Austin.jpg"
              alt=""
              style={{ borderRadius: "50%", height: "250px", width: "250px" }}
            />
            <div className="intro text-center mt-3">
              <p>Austin Prakesh</p>
              <p>Director strategy</p>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
