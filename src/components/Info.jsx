import React from "react";
import person from "../assets/person.png";
import mail_logo from "../assets/email.png";
import linkedin_logo from "../assets/linkedin.png";

export default function Info() {
    return (
        <header>
            <img src={person} alt="person" />
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h5>laurasmith.website</h5>
            <div>
                <button>
                    <img src={mail_logo} alt="mail logo" />
                    <label>Email</label>
                </button>
                <button>
                    <img src={linkedin_logo} alt="mail logo" />
                    <label>LinkedIn</label>
                </button>
            </div>
        </header>
    )
}