import React from "react";
import {
  ServiceDiv,
  ServiceImage,
  ServiceListItem,
  ServiceTitle,
  UnorderedList,
} from "./styled-components";

function Services() {
  return (
    <div>
      <h2>Services</h2>
      <UnorderedList>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\woman-facial.jpg"
            alt="woman-facial"
          />
          <ServiceDiv>
            <ServiceTitle>The Ultimate HydraWorks Facial</ServiceTitle>
            <p>1hr $150/ 90min $199</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\facial-massage.jpg"
            alt="massage"
          />
          <ServiceDiv>
            <ServiceTitle>Custom Facial</ServiceTitle>
            <p>1hr $69</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage src="src\assets\images\citrus.jpg" alt="citrus" />
          <ServiceDiv>
            <ServiceTitle>Vitamin C Infusion Treatment</ServiceTitle>
            <p>1hr $80</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\warm-salon.jpg"
            alt="warm salon"
          />
          <ServiceDiv>
            <ServiceTitle>Acne Facial</ServiceTitle>
            <p>$79/ Problematic $120</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\microdermabrasion.jpg"
            alt="microdermabrasion"
          />
          <ServiceDiv>
            <ServiceTitle>Microdermabrasion</ServiceTitle>
            <p>$89 with Infusion $120/45 min </p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\salon-meditation.jpg"
            alt="salon meditation"
          />
          <ServiceDiv>
            <ServiceTitle>Teen Facial</ServiceTitle>
            <p>1 hr $70</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\chemical-peel.jpg"
            alt="chemical peel"
          />
          <ServiceDiv>
            <ServiceTitle>Chemical Peels</ServiceTitle>
            <p>$99/30 min</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\lavender-salon.jpg"
            alt="lavender salon"
          />
          <ServiceDiv>
            <ServiceTitle>Back Treatment </ServiceTitle>
            <p>$95/45 min</p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage src="src\assets\images\treatment.jpg" alt="treatment" />
          <ServiceDiv>
            <ServiceTitle>Dermaplane</ServiceTitle>
            <p>1hr $79</p>
          </ServiceDiv>
        </ServiceListItem>
      </UnorderedList>
    </div>
  );
}

export default Services;
