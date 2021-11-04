import React from "react";
import Image from "next/image";
import IntroSecImg from "assets/images/dev_working.png";
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
				<Image src={IntroSecImg} alt="Dev Working" />
			</IntroImg>
			<IntroText>
				<h1>
					Hi, I am John,
					<br />
					Creative Technologist
				</h1>

				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.
				</p>

				<div className="buttonContainer">
					<CustomButton
						href={resumeLink}
						target="_blank"
						variant="contained"
						disableElevation
					>
						Download Resume
					</CustomButton>
				</div>
			</IntroText>
		</Section>
	);
};

export default IntroSection;
