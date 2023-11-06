import React from "react";
import {
  CompanyName,
  NameWrapper,
  NavigationItems,
  NavigationItemWrapper,
  NavigationStyled,
} from "./Navigation.styled-components";

function Navigation() {
  return (
    <div>
      <NavigationStyled data-testid="site navigation">
        <NameWrapper>
          {/* Have the svg included at a specific breakpoint*/}
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </g>
          </svg>
          <CompanyName to={"../Home"} target={"_blank"}>
            the skin studio by nikki
          </CompanyName>
        </NameWrapper>
        <NavigationItemWrapper>
          <NavigationItems to={"../About"} target={"_blank"}>
            About
          </NavigationItems>
          <NavigationItems to={"../Services"} target={"_blank"}>
            Services
          </NavigationItems>
          <NavigationItems to={"../Testimonials"} target={"_blank"}>
            Testimonials
          </NavigationItems>
          <NavigationItems to={"../Contact"} target={"_blank"}>
            Contact
          </NavigationItems>
        </NavigationItemWrapper>
      </NavigationStyled>
    </div>
  );
}

export default Navigation;
