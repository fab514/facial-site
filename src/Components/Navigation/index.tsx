import React from "react"
import NavigationStyled from "./NaviagationStyled"
import LinkWrapper from "../LinkWrapper"
import { CompanyName } from "./CompanyName"

function Navigation() {
    return (
        <div>
            <NavigationStyled data-testid="site navigation">
                <CompanyName to={"../Home"} target={"_blank"}>the skin studio by nikki</CompanyName>
                <LinkWrapper to={"../About"} target={"_blank"}>About</LinkWrapper>
                <LinkWrapper to={"../Gallery"} target={"_blank"}>Gallery</LinkWrapper>
                <LinkWrapper to={"../Details"} target={"_blank"}>Details</LinkWrapper>
                <LinkWrapper to={"../Testimonials"} target={"_blank"}>Testimonials</LinkWrapper>
                <LinkWrapper to={"../Contact"} target={"_blank"}>Contact</LinkWrapper>
            </NavigationStyled>
        </div>
    )
}

export default Navigation