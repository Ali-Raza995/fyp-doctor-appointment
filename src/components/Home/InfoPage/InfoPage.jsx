import React from "react";
import "./InfoPage.css";
import { FaClock, FaHeadset, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose Us?</h3>
              <p>
                At Doctor On Call, we believe in transparency and authenticity.
                We understand the importance of your health and well-being,
                which is why we are committed to providing you with personalized
                care and expertise. With us, you can expect unparalleled
                dedication and support on your journey to optimal health. Choose
                Doctor On Call for a partner you can trust."
              </p>
              <div className="text-center">
                <Link href="/" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHouseUser className="icon" />
                    <h4>Appointment</h4>
                    <small className="text-secondary">24 Hours Service</small>
                    <p>
                    We're dedicated to ensuring your convenience and accessibility to our services. Contact us anytime, and our team will be ready to assist you promptly.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaHeadset className="icon" />
                    <h4>Emegency Cases</h4>
                    <h6 className="text-secondary">+92-2263238623</h6>
                    <p>
                      We understand the importance of prompt and reliable
                      support during critical times. Rest assured, our team is
                      here to assist you with the utmost care and urgency.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <FaClock className="icon" />
                    <h4>Working Hours</h4>
                    <small className="text-secondary">Timing schedule</small>
                    <ul className="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Sun - Wed : </p> <p>8:00 - 17: 00</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Thus - Fri : </p> <p>9:00 - 17: 00</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between text-nowrap">
                        <p>Sat - Sun : </p> <p>10:00 - 17: 00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
