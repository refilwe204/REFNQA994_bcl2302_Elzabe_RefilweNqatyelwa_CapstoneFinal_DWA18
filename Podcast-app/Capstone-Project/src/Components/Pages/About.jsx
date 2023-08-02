import React from "react"

import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t Get bored While You Can chill And Listen to a Podcast.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}