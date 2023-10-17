import React from "react"
import { CompanyName, NameWrapper, NavigationItems, NavigationItemWrapper, NavigationStyled } from "./Navigation.styled-components";

function Navigation() {
    return (
        <div>
            <NavigationStyled data-testid="site navigation">
                <NameWrapper>
                    <CompanyName to={"../Home"} target={"_blank"}>the skin studio by nikki</CompanyName>
                </NameWrapper>
                <NavigationItemWrapper>
                    <NavigationItems to={"../About"} target={"_blank"}>About</NavigationItems>
                    <NavigationItems to={"../Details"} target={"_blank"}>Details</NavigationItems>
                    <NavigationItems to={"../Testimonials"} target={"_blank"}>Testimonials</NavigationItems>
                    <NavigationItems to={"../Contact"} target={"_blank"}>Contact</NavigationItems>
                </NavigationItemWrapper>
            </NavigationStyled>
        </div>
    )
}

export default Navigation