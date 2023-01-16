import React from "react";
import twitter_logo from "../assets/twitter.png"
import facebook_logo from "../assets/facebook.png"
import instagram_logo from "../assets/instagram.png"
import github_logo from "../assets/github.png"


export default function Footer() {
    return (
        <footer>
            <img src={twitter_logo} alt="twitter" />
            <img src={facebook_logo} alt="facebook" />
            <img src={instagram_logo} alt="instagram" />
            <img src={github_logo} alt="github" />
        </footer>
    )
}