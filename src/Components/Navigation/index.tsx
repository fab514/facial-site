import React from "react"
import NavigationStyled from "./NaviagationStyled"
import { CompanyName } from "./CompanyName"
import {NavigationItems} from './NavigationItems';

function Navigation() {
    return (
        <div>
            <NavigationStyled data-testid="site navigation">
                <CompanyName to={"../Home"} target={"_blank"}>the skin studio by nikki</CompanyName>
                <NavigationItems to={"../About"} target={"_blank"}>About</NavigationItems>
                <NavigationItems to={"../Gallery"} target={"_blank"}>Gallery</NavigationItems>
                <NavigationItems to={"../Details"} target={"_blank"}>Details</NavigationItems>
                <NavigationItems to={"../Testimonials"} target={"_blank"}>Testimonials</NavigationItems>
                <NavigationItems to={"../Contact"} target={"_blank"}>Contact</NavigationItems>
            </NavigationStyled>
        </div>
    )
}

export default Navigation