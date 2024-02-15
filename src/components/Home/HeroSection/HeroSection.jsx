import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" class="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>TOTAL HEALTH CARE SOLUTION</small>
                    <h1>Your Most Trusted <br />Health Partner</h1>
                    <small>Providing unwavering support and guidance,
                        for a life of vitality and well-being.".</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;