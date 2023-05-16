import React from "react";
import Image from "next/image";
import { devWorking } from "assets";
import {
  CustomButton,
  IntroImg,
  IntroText,
  Section,
} from "./IntroSection.style";

const IntroSection = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1_BI60ayYZZVCLhxPU2pvdc6HXjuyw7-V/view";

  return (
    <Section>
      <IntroImg>
        <Image src={devWorking} alt="Dev Working" placeholder="blur" />
      </IntroImg>
      <IntroText>
        <h1>
          Hi, I am Gurjot,
          <br />
          Full-Stack
          <br /> Developer
        </h1>

        <p>
          Meticulous web developer with hands-on experience and keenness for
          responsive website design and a firm believer in the mobile-first
          approach.
        </p>

        <div className="buttonContainer">
          <CustomButton
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
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
