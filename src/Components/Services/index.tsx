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
      <h2 style={{ paddingLeft: "40px" }}>Services</h2>
      <UnorderedList>
        <ServiceListItem>
          <ServiceImage
            src="src\assets\images\woman-facial.jpg"
            alt="woman-facial"
          />
          <ServiceDiv>
            <ServiceTitle>The Ultimate HydraWorks Facial</ServiceTitle>
            <p>1hr $150/ 90min $199</p>
            <p>
              A Water microdermabrasion hydration therapy, serums infusion,
              oxygen infusion, extractions and LED Light treatment.
            </p>
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
            <p>
              A customized facial is a completely personalized facial designed
              to treat any and all skin concerns you are facing.
            </p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage src="src\assets\images\citrus.jpg" alt="citrus" />
          <ServiceDiv>
            <ServiceTitle>Vitamin C Infusion Treatment</ServiceTitle>
            <p>1hr $80</p>
            <p>
              This relaxing vitamin C facial will help give your skin a healthy
              and radiant glow, targeting wrinkles, uneven skin colour and sun
              damage.
            </p>
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
            <p>
              Designed to combat acne, blackheads and blemishes with a minimal
              amount of side effects. They focus mainly on cleanses,
              extractions, facial masks and blue light therapy to clean and
              invigorate your skin.
            </p>
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
            <p>
              A minimally invasive epidermal resurfacing procedure used to treat
              uneven skin tone/texture, photoaging, striae, melasma, and scars,
              including acne scars.
            </p>
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
            <p>
              Designed to address breakouts that are associated with adolescent
              changes that affect teenager skin.
            </p>
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
            <p>
              A technique used to improve and smooth the texture of the skin.
              Chemical peels are intended to remove the outermost layers of the
              skin.
            </p>
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
            <p>
              Designed to clarify, soften and deep cleanse the skin on the back
              while providing a deep moisturizing treatment which will leave you
              with a healthy and glowing back.
            </p>
          </ServiceDiv>
        </ServiceListItem>
        <ServiceListItem>
          <ServiceImage src="src\assets\images\treatment.jpg" alt="treatment" />
          <ServiceDiv>
            <ServiceTitle>Dermaplane</ServiceTitle>
            <p>1hr $79</p>
            <p>
              Used to treat deep acne scars with a hand-held instrument called a
              dermatome.
            </p>
          </ServiceDiv>
        </ServiceListItem>
      </UnorderedList>
    </div>
  );
}

export default Services;
