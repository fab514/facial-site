import React from "react";
import { FooterButton } from "./FooterButton";
import { FooterWrapper } from "./FooterWrapper";

function Footer() {
    return (
        <FooterWrapper>
            <div>the skin studio by nikki</div>
            <div>2948 Artesian Road Suite 104A Naperville IL 60564</div>
            <div>331.213.9873</div>
            <div>email...info@theskinstudiobynikki.com</div>
            <FooterButton>Book Now</FooterButton>
        </FooterWrapper>
    )
}

export default Footer;