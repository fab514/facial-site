import React from "react";
import {
  ServiceDiv,
  ServiceImage,
  ServiceListItem,
  ServiceTitle,
  UnorderedList,
} from "./styled-components";
import data from "./Services.json";

function Services() {
  return (
    <>
      <h2 style={{ paddingLeft: "40px" }}>Services</h2>
      {data.map(({ src, alt, title, price, description }) => {
        return (
          <UnorderedList>
            <ServiceListItem>
              <ServiceImage src={src} alt={alt} />
              <ServiceDiv>
                <ServiceTitle>{title}</ServiceTitle>
                <p>{price}</p>
                <p>{description}</p>
              </ServiceDiv>
            </ServiceListItem>
          </UnorderedList>
        );
      })}
    </>
  );
}

export default Services;
