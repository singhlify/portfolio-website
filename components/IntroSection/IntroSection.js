import React from "react";
import Image from "next/image";
import { devWorking } from "assets";
import {
  CustomButton,
  IntroImg,
  IntroText,
  Section,
} from "./IntroSection.style";

const IntroSection = ({
  resumeUrl = "",
  introTitle = "",
  introDescription = "",
}) => {
  return (
    <Section>
      <IntroImg>
        <Image
          priority
          src={devWorking}
          alt="Gurjot Singh"
          placeholder="blur"
        />
      </IntroImg>
      <IntroText>
        <h1 dangerouslySetInnerHTML={{ __html: introTitle }} />

        <p>{introDescription}</p>

        <div className="buttonContainer">
          <CustomButton
            href={resumeUrl}
            target="_blank"
            variant="contained"
            disableElevation
          >
            View Resume
          </CustomButton>
        </div>
      </IntroText>
    </Section>
  );
};

export default IntroSection;
