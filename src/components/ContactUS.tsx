import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.min.css";
import "../styles/animate.css";
import "../styles/hamburgers.min.css";
import "../styles/select2.min.css";
import "../styles/util.css";
import "../styles/main.css";
import myImage from "../images/img-01.webp"

const ContacUS: React.FC = () => {
  return (
    <>
     <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-n+x+LbHWxTzfAFf0x10AlWodDk17j0uxV+wQ9hKZ/wDTZ6OrZwXG4AZHxP0L7wwIt42H3cLT5IsD44lCT3Kf0w=="
        crossOrigin="anonymous"
      />
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src={myImage} alt="IMG" />
          </div>
          <form className="contact1-form validate-form">
            <span className="contact1-form-title">Get in touch</span>
            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Name"
              />
              <span className="shadow-input1"></span>
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input1"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="shadow-input1"></span>
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <span className="shadow-input1"></span>
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input1"
                name="message"
                placeholder="Message"
              ></textarea>
              <span className="shadow-input1"></span>
            </div>
            <div className="container-contact1-form-btn">
              <button className="contact1-form-btn">
                <span>
                  Send Email
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContacUS;
